const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const webRoutes = require ("./routes/web.js");
const pug = require("pug");
const path = require("path");

app.use(express.static("client/public"));

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "../client/src/views"));


app.use(webRoutes);

app.listen(process.env.PORT, || 3000, () => {
  console.log(`server is running on port ${PORT}!`);
})
