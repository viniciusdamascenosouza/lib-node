const fs = require("fs");

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, "utf-8", (_, text) => {
  console.log(text);
});
