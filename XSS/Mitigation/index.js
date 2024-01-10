const express = require("express");
const app = express();

const PORT = 8000;

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-safe-code' 'unsafe-inline' http://unsecure.com;"
  );
  next();
});

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.js");
});

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});
