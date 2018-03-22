"use strict";
const express = require("Express");
const path = require("path");
const app = express();

app.set('port', process.env.PORT || 4000);
//app.use(express.static("public"));

/*app.get("/", (req, res) => {
  res.send(path.sesolve(__dirname, "public", "index.html"));
});*/
app.get('/', function (req, res) {
  res.send('Hello Node + GitHub!');
});
let port = app.get('port');
console.log(`port will be set to ${port}`);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
