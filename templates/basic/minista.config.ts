import { defineMinistaUserConfig } from "minista"

export default defineMinistaUserConfig({
  entry: "/src/assets/index.ts",
  vite: {
    optimizeDeps: {
      include: [
        "dayjs",
        "dayjs/plugin/utc.js",
        "dayjs/plugin/timezone.js",
        "minista-sitemap",
      ],
    },
  },
})
