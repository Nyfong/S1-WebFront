const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`server is running with port:${PORT}`);
});

app.get("/", (req, res) => {
  return res.send("nigga");
});
