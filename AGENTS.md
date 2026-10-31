# Review guidelines（onholdlab 網頁遊戲：期中考模擬）

- 遊戲頁必須保留 `<style id="inapp-lock">` 和 `inapp-lock-js`；刪掉或改成 passive 監聽，Threads/IG 內建瀏覽器會整頁滑動、拖曳轉頭失效。
- 不可用 `100vh` 排版；用 `100%` 或 `100dvh`。
- `og:image` 必須是絕對網址。
- 題庫 `BANK` 每題格式為 `[題幹, 選項A, 選項B, 選項C, 正解索引0-2]`；改題庫時要確認正解索引與選項對得上，且題幹不可引用「第 N 題」（遊戲會打亂題目順序）。
- 錯題回報箱必須走 `https://onholdlab.github.io/js/feedback.js`（source = `midterm-sim`）；不可把 Supabase secret key 放進前端。
- 只回報會讓玩家玩不了或看錯的問題；不要回報命名、格式、風格。
