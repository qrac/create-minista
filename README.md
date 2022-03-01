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

minista プロジェクトをテンプレートからスタートできます。

## How To Use

**NPM**

```bash
npm init minista
```

**Yarn**

```bash
yarn create minista
```

```bash
# npm 6.x
npm init minista@latest my-minista-project --template ts

# npm 7+, extra double-dash is needed:
npm init minista@latest my-minista-project -- --template ts

# yarn
yarn create minista my-minista-project --template ts
```

`--template` にはリポジトリの[Templates](https://github.com/qrac/create-minista/tree/main/templates)が使えます。

- `basic`: TypeScript・サイトマップ・Zip 圧縮等の納品基本セット
- `ts`: TypeScript の最小限構成
- `js`: JavaScript の最小限構成

テンプレートとして任意の GitHub リポジトリを使用することもできます。

```bash
npm init minista my-minista-project -- --template qrac/minista-blog-with-rest-api
```

## Fork & Respect!!

- [astro/packages/create-astro at main · withastro/astro](https://github.com/withastro/astro/tree/main/packages/create-astro)
- [vite/packages/create-vite at main · vitejs/vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)
- [vite/cli.ts at main · vitejs/vite](https://github.com/vitejs/vite/blob/main/packages/vite/src/node/cli.ts)

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
