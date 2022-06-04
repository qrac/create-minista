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

簡単なコマンド入力で [minista](https://minista.qranoko.jp/) のプロジェクトを開始することができます。

## How To Use

```bash
# Interactive
$ npm init minista@latest

# Shortcut
$ npm init minista@latest my-minista-project -- --template ts
```

| テンプレート | 内容                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------- |
| `basic`      | 静的サイト制作用 / ヘッダー・フッターなど毎度書くコンポーネント構成を内包（TypeScript）     |
| `basic-saas` | SaaS テンプレート制作用 / 内容はブランクで納品目次, 納品用 Zip コマンドを内包（TypeScript） |
| `ts`         | TypeScript を使った最低限の構成                                                             |
| `js`         | JavaScript を使った最低限の構成                                                             |

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
