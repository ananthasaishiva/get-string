const express = require("express");
const app = express();
app.get("/", (request, responce) => {
  responce.send("Express JS");
});
app.listen(3000);

module.exports = app;
