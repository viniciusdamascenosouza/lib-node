const fs = require("fs");

const filePath = process.argv;
const link = filePath[2];

function checkDuplicatedWords(text) {
  const wordsList = text.split(" ");
  const result = {};
  // object[property] = value;
  wordsList.forEach((word) => {
    result[word] = (result[word] || 0) + 1;
  });
  console.log(result);
}

fs.readFile(link, "utf-8", (_, text) => {
  checkDuplicatedWords(text);
});

// {
//   web: 5,
//   computador: 4,
// }
