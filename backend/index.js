const express = require("express");
const module1 = require("./functions/primarytest");
const app = express();
const port = 4565;
var cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/db/user/insert", module1.FunctionInsert);
app.get("/db/user/select", module1.FunctionSelect);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});