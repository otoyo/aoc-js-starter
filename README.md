# AoC JS Starter

[Advent of Code](https://adventofcode.com/)をNode.jsで始めるためのスターターキット

## 必要ツール

このプロジェクトを使用するには以下のツールが必要です。

- [Node.js](https://nodejs.org/ja) バージョン22以上
- [Visual Studio Code](https://code.visualstudio.com/)

## リポジトリのクローン

VSCodeを開きます。Gitがすでにインストールされている場合は「Clone Git Repository...」「Clone from GitHub」の順に選び `otoyo/aoc-js-starter` を入力してリポジトリを選択し、適当なフォルダを選んでプロジェクトを開きます。  
Gitがインストールされていない場合は、先にVSCode左からGitのアイコン（枝分かれのアイコン）を選びGitをインストールします。

## パッケージのインストール

必要なパッケージをインストールします。  
VSCode上部の検索バーから「Run Task」を選択して「Install packages」を選択します。  
  
もしくは、ターミナルで `aoc-js-project` のディレクトリに移動した後、下記のコマンドを実行してインストールすることもできます。

```bash
npm install
```

## 入力ファイルの作成

例題の入力は `input-example.txt` というファイル名で日付ディレクトリの中に作成します。  
例えば、Day 1の例題の入力は `day01` ディレクトリの中に `input-example.txt` を配置します。  
  
本番の入力は `input.txt` というファイル名で日付ディレクトリの中に作成します。  
例えば、Day 1の本番の入力は `day01` ディレクトリの中に `input.txt` を配置します。

## 例題の入力を使ったコードの実行

例題の入力を使ったコードは `script.js` か `test.js` を開いている状態でVSCode上部の検索バーから「Run Task」を選び、「Test」を選ぶことで実行することができます。  

または、 `script.js` か `test.js` を開いている状態でショートカットキーを使って実行することもできます。

- Windowsの場合: Ctrl + Shift + B
- Macの場合: Cmd + Shift + B

もしくは、ターミナルで下記のようにコマンドで実行することもできます。

```bash
npm test day01
```

例題は答えが与えられているため、問題に取り掛かる前に `test.js` に書かれたテストを更新しておくのがおすすめです。  
例えば、例題の答えが `24000` の場合は下記のようにします。

```diff
  describe('Part 1', () => {
-   it('should return 1', () => {
-     assert.equal(part1(inputFile), 1);
+   it('should return 24000', () => {
+     assert.equal(part1(inputFile), 24000);
    });
  });
```

プログラムが書けたと思ったら、テストを実行して期待通りの答えになっているか確認しましょう。

## 本番の入力を使ったコードの実行

本番の入力を使ったコードは `script.js` か `test.js` を開いている状態でVSCode上部の検索バーから「Run Task」を選び、「Run」を選ぶことで実行することができます。  

もしくは、ターミナルで下記のようにコマンドで実行することもできます。

```bash
node day01/script.js
```

## Day 2以降の使い方

このリポジトリには例としてDay 1のみディレクトリとファイルが作られています。  
Day 2以降は `day02` のようにディレクトリを作成してください。  
作成したディレクトリの中にDay 1のファイルをコピーし、中身を書き換えて使ってください。