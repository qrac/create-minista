# create-minista

<p>
  <a aria-label="Made by QRANOKO" href="https://qranoko.jp">
    <img src="https://img.shields.io/badge/MADE%20BY%20QRANOKO-212121.svg?style=for-the-badge&labelColor=212121">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/create-minista">
    <img alt="" src="https://img.shields.io/npm/v/create-minista.svg?style=for-the-badge&labelColor=212121">
  </a>
  <a aria-label="License" href="https://github.com/qrac/create-minista/blob/master/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/create-minista.svg?style=for-the-badge&labelColor=212121">
  </a>
</p>

## About

You can start a minista project with a simple command entry.

## How To Use

```bash
# Interactive
$ npm init minista@latest

# Shortcut
$ npm init minista@latest my-minista-project -- --template ts
```

| template     | detail                                   |
| ------------ | ---------------------------------------- |
| `basic`      | Basic web site starter (TypeScript)      |
| `basic-saas` | Basic SaaS template starter (TypeScript) |
| `ts`         | TypeScript minimum configuration         |
| `js`         | JavaScript minimum configuration         |

```bash
# You can also use any GitHub repository
npm init minista my-minista-project -- --template qrac/minista-blog-with-rest-api
```

## Fork & Respect

- [astro/packages/create-astro at main · withastro/astro](https://github.com/withastro/astro/tree/main/packages/create-astro)
- [vite/packages/create-vite at main · vitejs/vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)
- [vite/cli.ts at main · vitejs/vite](https://github.com/vitejs/vite/blob/main/packages/vite/src/node/cli.ts)

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
