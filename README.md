※ create-minista の開発は [minista](https://github.com/qrac/minista) のリポジトリに移動しました

# create-minista

## About

簡単なコマンド入力で [minista](https://minista.qranoko.jp/) のプロジェクトを開始できます。

## How To Use

```bash
# Interactive
$ npm init minista@latest

# Shortcut
$ npm init minista@latest my-minista-project -- --template ts
```

| テンプレート | 内容                                                                      |
| ------------ | ------------------------------------------------------------------------- |
| `basic`      | 静的サイト制作用 / 基本のコンポーネント構成（TypeScript）                 |
| `basic-saas` | SaaS テンプレート制作用 / 納品用の目次, 納品用 Zip コマンド（TypeScript） |
| `ts`         | TypeScript を使った最低限の構成                                           |
| `js`         | JavaScript を使った最低限の構成                                           |

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
