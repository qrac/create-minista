import { defineConfig } from "minista"

export default defineConfig({
  assets: {
    entry: [
      {
        name: "test-style",
        input: "/src/assets/entries/index.css",
        insertPages: ["/test/**/*", "/test/"],
      },
      {
        name: "test-script",
        input: "/src/assets/entries/index.ts",
        insertPages: ["/test/**/*", "/test/"],
      },
    ],
  },
  beautify: {
    //useAssets: true,
  },
})
