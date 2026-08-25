# react_native_ui

Expo (SDK 51) + React Native + TypeScript の学習用アプリです。
開発環境は Docker コンテナ上で動作し、Expo Go を入れた実機に LAN 経由で配信します。

## 前提

- Docker / Docker Compose が使えること
- 実機と、コンテナを動かす PC が同じ LAN に接続されていること
- 実機に **SDK 51 対応の Expo Go** が入っていること
  - ストア版の Expo Go は最新 SDK のみサポートするため、新規インストールした Expo Go では
    この SDK 51 のプロジェクトを開けません。SDK 51 対応の Expo Go が入った端末を使うか、
    Expo SDK を上げる／`expo-dev-client` でビルドする対応が必要です。

## セットアップ

1. ローカル PC の IP アドレスを `.env` に書き込む

   ```bash
   ./get-local-ip-address.sh
   ```

   `.env` の `LOCAL_IP_ADDR` が実際の IP になっているか確認してください。
   このスクリプトは追記（`>>`）なので、実行するたび行が増えます。また NIC が複数ある環境では
   複数の IP が 1 行に並んでしまうため、その場合は手で書き直してください。

2. イメージをビルドする

   ```bash
   docker compose build --no-cache
   ```

3. コンテナを起動して入る

   ```bash
   docker compose up -d
   docker exec -it react_native_ui-node-1 bash
   ```

4. 初回のみ依存をインストールする（`app/node_modules` はホストにマウントされます）

   ```bash
   yarn install
   ```

5. 開発サーバを起動する

   ```bash
   yarn start
   ```

   QR コードが表示されるので、実機の Expo Go で読み取ると画面が描画されます。
   同一 LAN で繋がらない場合は `yarn tunnel` を試してください。

## コマンド一覧

コンテナ内（`/usr/src/app`）で実行します。

| コマンド | 内容 |
| --- | --- |
| `yarn start` | Expo 開発サーバ（Metro）を起動。ポート 8081 をホストに公開 |
| `yarn tunnel` | LAN 経由で繋がらない場合に ngrok トンネル経由で配信 |
| `yarn android` / `yarn ios` | エミュレータ／シミュレータ向けに起動 |
| `yarn web` | ブラウザ向けに起動 |
| `yarn typecheck` | `tsc --noEmit` で型チェック |
| `yarn test` | Jest（`jest-expo` プリセット）でテスト実行 |

## ディレクトリ構成

```
.
├── Dockerfile              # node:18-slim ベースの開発用イメージ
├── docker-compose.yml      # ポート 8081 公開 / app/ をマウント
├── get-local-ip-address.sh # .env に LOCAL_IP_ADDR を書き込む
└── app/
    ├── App.tsx             # エントリ。React Navigation のスタック定義
    ├── app.json            # Expo 設定
    ├── tsconfig.json       # expo/tsconfig.base を継承（strict: true）
    ├── components/         # 画面コンポーネント
    │   ├── CalendarComponent.tsx
    │   ├── DialogComponent.tsx
    │   └── TodoList.tsx
    └── jest/               # Jest の学習用テスト
```

## TypeScript について

- ソースはすべて TypeScript（`.tsx` / `.ts`）です。`tsconfig.json` は `expo/tsconfig.base` を
  継承しつつ `strict: true` を有効にしています。
- 型チェックは `yarn typecheck` で行います。Metro / Jest の変換は `babel-preset-expo` が担当し、
  型は落とすだけなので、ビルド時に型エラーは検出されません。
- 画面遷移の型は `App.tsx` の `RootStackParamList` に定義しています。画面を追加するときは
  ここにルート名を足してください。

## 既知の注意点

- `app/jest/` のテストは Jest の挙動を確認するための学習用で、**意図的に失敗するケースが含まれます**
  （`sum(1, 4) === 3`、`/^you are using the wrong JDK$/`、ループ内で `a + b === 10` になるケースなど）。
  `yarn test` は現状 9 件中 6 件が失敗します。
- `jest/dialogcomponent.test.tsx` は `getByText('Show Dialog')` を探しますが、実際のボタン文言は
  「ダイアログ確認ボタン」のため失敗します。
- `components/TodoList.tsx` の `toast.show()` に渡している `status` は NativeBase v2 由来の
  プロパティで、v3 では型に存在しません。実行時の挙動を変えないためキャストして残しています。
