const express = require("express");

const app = express();
const indexRouter = require("./routes/index");

// PORT number
const PORT = 8080;

// routing
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(PORT, "번에서 대기 중");
});
