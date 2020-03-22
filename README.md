# 岐阜県 新型コロナウイルス感染症対策サイト（非公式）

[![Netlify Status](https://api.netlify.com/api/v1/badges/e3aa2c56-419c-413f-9949-ec4c3a6b9690/deploy-status)](https://app.netlify.com/sites/relaxed-heyrovsky-1294db/deploys)

![岐阜県 新型コロナウイルス感染症対策サイト](https://covid19-gifu.netlify.com/ogp.png)

## How to Contribute / 貢献の仕方

Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[How to contribute](https://github.com/CODE-for-GIFU/covid19/blob/development/.github/CONTRIBUTING.md)を御覧ください。

All contributions are welcome!
Please check [How to contribute](https://github.com/CODE-for-GIFU/covid19/blob/development/.github/CONTRIBUTING.md) for details.

## License / ライセンス

本ソフトウェアは、MIT ライセンスの元提供されています。
This software is released under the MIT License.

## For Developers / 開発者向け情報

### How to Set Up Environments / 環境構築の手順

**Use yarn / yarn を使う場合**

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**Use docker / docker compose を使う場合**

```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### Deployment to Development & Production Environments / 開発・本番環境への反映

`master` ブランチがアップデートされると、自動的に本番サイトが [https://covid19-gifu.netlify.com](https://covid19-gifu.netlify.com) 更新されます。

`develop` ブランチがアップデートされると、自動的に開発用サイト [https://dev-covid19-gifu.netlify.com](https://dev-covid19-gifu.netlify.com) が更新されます。
