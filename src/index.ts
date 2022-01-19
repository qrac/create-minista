import fs from "fs"
import path from "path"
import { bold, cyan, gray, green, red, yellow } from "kleur/colors"
import prompts from "prompts"
import degit from "degit"
import yargs from "yargs-parser"
import { TEMPLATES } from "./templates.js"

const cleanArgv = process.argv.filter((arg) => arg !== "--")
const args = yargs(cleanArgv)
prompts.override(args)

const { version } = JSON.parse(
  fs.readFileSync(new URL("../package.json", import.meta.url), "utf-8")
)
//const POSTPROCESS_FILES = ["package.json", "project.json"]

export function mkdirp(dir: string) {
  try {
    fs.mkdirSync(dir, { recursive: true })
  } catch (e: any) {
    if (e.code === "EEXIST") return
    throw e
  }
}

export async function main() {
  console.log(`\n${bold("create-minista")} ${gray(`(v${version})`)}`)

  const cwd = args["_"][2] || "."

  if (fs.existsSync(cwd)) {
    if (fs.readdirSync(cwd).length > 0) {
      const response = await prompts({
        type: "confirm",
        name: "forceOverwrite",
        message: "Directory not empty. Continue [force overwrite]?",
        initial: false,
      })
      if (!response.forceOverwrite) {
        process.exit(1)
      }
      mkdirp(cwd)
    }
  } else {
    mkdirp(cwd)
  }

  const options = await prompts([
    {
      type: "select",
      name: "template",
      message: "Which template would you like to use?",
      choices: TEMPLATES,
    },
  ])

  if (!options.template) {
    process.exit(1)
  }

  const hash = args.commit ? `#${args.commit}` : ""

  const templateTarget = options.template.includes("/")
    ? options.template
    : `qrac/create-minista/templates/${options.template}`

  const emitter = degit(`${templateTarget}${hash}`, {
    cache: false,
    force: true,
    verbose: false,
  })

  /*const selectedTemplate = TEMPLATES.find(
    (template) => template.value === options.template
  )*/

  try {
    console.log(`${green(`>`)} ${gray(`Copying project files...`)}`)
    await emitter.clone(cwd)
  } catch (err: any) {
    console.error(red(err.message))
    process.exit(1)
  }

  /*await Promise.all(
    POSTPROCESS_FILES.map(async (file) => {
      const fileLoc = path.resolve(path.join(cwd, file))

      if (fs.existsSync(fileLoc)) {
        switch (file) {
          case "package.json":
          case "project.json": {
            const fileJSON = JSON.parse(
              await fs.promises.readFile(fileLoc, "utf8")
            )
            fileJSON.name = cwd

            await fs.promises.writeFile(
              fileLoc,
              JSON.stringify(fileJSON, undefined, 2)
            )
            break
          }
        }
      }
    })
  )*/

  console.log(bold(green("✔") + " Done!"))

  console.log("\nNext steps:")
  let i = 1

  const relative = path.relative(process.cwd(), cwd)
  if (relative !== "") {
    console.log(`  ${i++}: ${bold(cyan(`cd ${relative}`))}`)
  }

  console.log(
    `  ${i++}: ${bold(cyan("npm install"))} (or pnpm install, yarn, etc)`
  )
  console.log(
    `  ${i++}: ${bold(
      cyan('git init && git add -A && git commit -m "Initial commit"')
    )} (optional step)`
  )
  console.log(`  ${i++}: ${bold(cyan("npm run dev"))} (or pnpm, yarn, etc)`)

  console.log(`\nTo close the dev server, hit ${bold(cyan("Ctrl-C"))}`)
}
