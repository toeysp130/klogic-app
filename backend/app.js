const express = require("express");
const app = express();
const connectDB = require("./config/db");
connectDB();
app.get("/", (req, res) => {
  res.send("Hello backend");
});
app.use("/api/insert", require("./routes/api/insert"));
app.use(
  express.json({
    extended: false,
  })
);

app.listen(5000, () => {
  console.log("server start successfully");
});
