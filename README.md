# react_native_ui


- 前提：スマホにはExpoアプリ(SDK51)がインストールされており、実行したパソコンと同じLANで接続していることが前提となっております。

1. ```get-local-ip-address.sh```をローカルで実行(.envファイルにローカルPCのIPアドレスが書き込まれたことを確認)
2. ```docker compose build --no-cache```
2. ```docker compose up -d```
3. ```docker exec -it react_native_ui-node-1 bash```
4. 初回の場合は```node_module```が必要なため、```yarn install```を実行してください
5. ```yarn start```
- QRコードが表示されるのでスマホで読み取るとスマホに描画される

