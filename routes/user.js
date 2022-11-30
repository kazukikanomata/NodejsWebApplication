const express = require("express");
const { route } = require("express/lib/application");
const req = require("express/lib/request");
const router = express.Router();

router.get("/" , (req,res) =>{
    res.send("ユーザーです");
});

router.get("/info" , (req,res) =>{
    res.send("ユーザー情報です");
});

router.get("/:id", (req,res) =>{
    res.send(`${req.params.id}のユーザーのIDを取得しました。`);
});

// どこでも使えるようにファイルを読み込むように設定
module.exports = router;