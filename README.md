# AtCoder TypeScript Template

## 概要

AtCoder に TypeScript で挑戦するための自分用テンプレート

## 環境

- windows11
- Node.js v18
- VSCode

その他環境でもおそらく動くと思いますが動作確認はしていません。

## 機能

- コマンド１発ですぐコーディング環境が整う
- 競技プログラミングで使いやすい標準入力ラッパーを提供
- バンドラー(webpack)によってファイルの肥大化を防ぎ、スッキリしたコーディングができる
- [vscode] ctrl+S で自動フォーマットが走る
- [vscode] F5 で現在開いているファイルをデバッグ実行できる
- [vscode] ctrl+shift+B で現在開いているファイルを webpack により bundle できる

## 使い方

### 環境構築

※ Node.js / VSCode / Git をインストールしていない場合は事前にインストールしてください。

```shell
# powershell

# このレポジトリをclone（folderNameには`abc123`などのフォルダ名を指定）
git clone https://github.com/torippy1024/atcoder-ts-template.git [folderName]

# フォルダ内に移動
cd [folderName]

# パッケージインストール
npm i

# VSCodeでフォルダを開く
code .
```

以下のようなシェルスクリプト(ps1)を用意しておくとコマンド１発で環境構築できます。

```ps1
# atcoder-ts-template.ps1
Param ([string]$projectName)

git clone https://github.com/torippy1024/atcoder-ts-template.git $projectName
Set-Location $projectName
git remote rm origin
npm i
code .
Set-Location ..
```

```shell
# powershell
atcoder-ts-template.ps1 abc123
```

### コーディング

src フォルダの中に、[a,b などのアルファベット].ts ファイルがあります。  
問題と同じアルファベットの ts ファイルでコーディングしていきます。

```ts
// a.ts
import {close, input, inputs} from './utils/stdio';

const main = async () => {
  const N = Number(await input());
  const A = await inputs(N);

  console.log(`N: ${N}`);
  console.log(A);

  close();
};

main();
```

基本的に main 関数の中にコードを書いていけば OK です。

標準入力は utils フォルダに置いている自作 input 関数で python ライクに取得できます。  
ただし、await をつける必要があります。  
また、inputs 関数によって、N 行の標準入力取得もできます。  
標準出力は consol.log でできます。

```shell
(input)
3
aaa
bbb
ccc

(output)
N: 3
['aaa', 'bbb', 'ccc']
```

また、VSCode で作業をしていれば、ファイル保存時に自動でフォーマットが走ります。  
競技プログラミングはスピード命なのでコードがグチャグチャになりやすいですが、手間な綺麗なコードにしてくれるので便利。  
フォーマットが気に入らない場合は、.prettierrc を編集することでフォーマット方法をカスタマイズできます。

### 実行

F5 で現在開いているファイルをデバッグ実行できます。  
デバッガー立ち上げ後、ターミナルにテストケースコピペでコードテストすることができます。

### ビルドと提出

ctrl+shift+B で現在開いているファイルを webpack により bundle できます。
正常に bundle できると dist/bundle.js が生成されるので、bundle.js を提出。
