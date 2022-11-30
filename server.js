const express = require("express");
const app = express();
const PORT = 3000;
// 外部ファイルを読み込む
const UserRouter = require("./routes/user");

// public フォルダの中を静的なファイルと読み込んでいく。
// app.use(express.static("public"));


app.use(myLogger);
// 動的なファイルを読み込んでいく
app.set("view engine" , "ejs");

app.get("/", (req,res) => {
    // console.log("hello express");
    // res.send("こんにちは");
    // res.status(500).send("エラーです。");
    // res.status(500).json({ msg: "エラーです。"});

    res.render("index", { text: "NodejsとExpress" });
});

// ルーティング
app.use("/user", UserRouter);


// ミドルウェア requestを送る前にチェックしてあげるのがミドルウェアの役割
function myLogger(req, res, next){
    console.log(req.originalUrl);
    // 実行を止めないこと
    next();
}

app.listen(PORT ,()=> console.log("サーバーが起動しました。"));