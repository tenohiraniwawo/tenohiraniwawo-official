# 手のひらに和をWebサイト
## 推奨開発環境
- エディタ：[VSCode](https://code.visualstudio.com/)
  - インストール方法が分からなければググってください
- Node.JS(必須)
  - これがないと変更の結果を手元で確認ができない
  - [ここ](https://zenn.dev/tmasuyama1114/books/vue-rails-chat/viewer/node-js-installation)とかにインストール方法は書いてある
- Git(必須)
  - 変更の差分を共有するために必要
  - Windowsの場合は[ここ](https://qiita.com/T-H9703EnAc/items/4fbe6593d42f9a844b1c)とかにインストール方法が書いてある
  - Macは[ここ](https://qiita.com/suke_masa/items/4bed855628f7414293f8)とか

## 各種ツール
- GitHub
  - コードの差分管理
  - レポジトリは[ここ](https://github.com/tenohiraniwawo/tenohiraniwawo-official)
- Netlify
  - ホスティングサービス(全世界にWebサイトを公開するサーバーを準備してくれる)
  - [ここ](https://app.netlify.com/)に手のひらのGitHubアカウントでログイン
- microCMS
  - ヘッドレスCMSサービス
  - お知らせ機能の文面をプログラムを弄らずに更新できる
  - [ここ](https://microcms.io/)からログイン

## プログラム変更の手順
- 現在のプログラムを手元に取り込む`git clone origin main`
- 初めて取り込む時だけ`git clone https://github.com/tenohiraniwawo/tenohiraniwawo-official.git`
