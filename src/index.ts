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
const POSTPROCESS_FILES = ["package.json", "project.json"]

export function isEmpty(path: string) {
  return fs.readdirSync(path).length === 0
}

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

  let targetDir = args["_"][2] || "."

  const defaultProjectName = !targetDir ? "minista-project" : targetDir

  const options = await prompts([
    {
      type: targetDir ? null : "text",
      name: "projectName",
      message: "Project name:",
      initial: defaultProjectName,
      onState: (state) =>
        (targetDir = state.value.trim() || defaultProjectName),
    },
    {
      type: () =>
        !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : "confirm",
      name: "overwrite",
      message: () =>
        (targetDir === "."
          ? "Current directory"
          : `Target directory "${targetDir}"`) +
        ` is not empty. Remove existing files and continue?`,
    },
    {
      type: (_, { overwrite }: { overwrite?: boolean } = {}) => {
        if (overwrite === false) {
          throw new Error(red("✖") + " Operation cancelled")
        }
        return null
      },
      name: "overwriteChecker",
    },
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
    : `qrac/create-minista/templates/${options.template}#latest`

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
    await emitter.clone(targetDir)
  } catch (err: any) {
    console.error(red(err.message))
    process.exit(1)
  }

  await Promise.all(
    POSTPROCESS_FILES.map(async (file) => {
      const fileLoc = path.resolve(path.join(targetDir, file))

      if (fs.existsSync(fileLoc)) {
        switch (file) {
          case "package.json":
          case "project.json": {
            const fileJSON = JSON.parse(
              await fs.promises.readFile(fileLoc, "utf8")
            )
            fileJSON.name = targetDir

            await fs.promises.writeFile(
              fileLoc,
              JSON.stringify(fileJSON, undefined, 2)
            )
            break
          }
        }
      }
    })
  )

  console.log(bold(green("✔") + " Done!"))

  console.log("\nNext steps:")
  let i = 1

  const relative = path.relative(process.cwd(), targetDir)
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
