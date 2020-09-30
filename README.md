# react-ssr

Reactを自力でSSRする方法を知るためにPoCで作りました。

## しくみ

* WebServerとしてnest.jsを使用
* ルートコンポーネントをcomponentsに用意しておく
* サーバーのレスポンスを生成する箇所でSSRする
    * SSRしたものをdivタグの中に埋め込む(id="app"としている)
    * WebpackでSPA用のスクリプトをその場で生成してHTMLに埋め込む(id="app"のタグに対してhydrateする)
    * 今はキャッシュしていないので、レスポンスにWebpackの処理時間がそのままかかってくる。(キャッシュすればいいけど)

## 困ったとこ

* tsファイルを指定したら、それをファイルとして吐くjs bundlerばかりで困った。
    * browserify, parcel, rollup, fuse-box あたりを試したけど、うまく取得できなかった
    * ほかにも microbundle, lasso, poi, rome などがあるらしいので、いつか試しましょう
    * 結局、Webpackを使った。Webpackには [Custom File System](https://webpack.js.org/api/node/#custom-file-systems) という熱い機能があるらしく、助かった。
    * ちなみに、ファイルに吐いてそれをキャッシュとして利用してもいいんじゃないかという気はしている。
