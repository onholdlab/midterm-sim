# 期中考模擬：抽離視角

搞笑期中考教室 3D 網頁遊戲，也能戴上耳機專心複習：40 個科系、1,590 題三選一（上學期範圍）。

- 遊戲：`index.html`（單檔，three.js r128 走 cdnjs）
- 錯題回報箱：走作品集共用回饋 `https://onholdlab.com/js/feedback.js`，寫進 Cloudflare ohl-api 的 `feedback` 表（source = `midterm-sim`）
- 分析：GoatCounter（onholdlab）事件 `midterm-dept/*`、`midterm-finish/*`、`midterm-headphone`、`midterm-report`

## 已知問題

- 未在 iOS 實機完整驗證
- 沒有 WebGL 的瀏覽器會顯示空白

© 2026 onholdlab

## 回報傳輸規格
共用回報程式載入 https://onholdlab.com/js/feedback.js，送至 Cloudflare Worker ohl-api 的 D1 feedback 表。題目、選項與說明合計超過 2,000 個 UTF-16 code units 時，在送出前提示縮短說明並保留輸入，不送出截斷內容。答題中回報入口另行規劃，本次不變更。
