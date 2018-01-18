const express = require("express");
const app = express();

app.use(express.static(__dirname + "/"));
app.use("/styles", express.static(__dirname + "/styles"));

app.listen(process.env.PORT || 8080);
