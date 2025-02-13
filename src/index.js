const fs = require("fs");
const { text } = require("stream/consumers");

const filePath = process.argv;
const link = filePath[2];

function checkDuplicatedWords(text) {
  const wordsList = text.split(" ");
  const result = {};
  // object[property] = value;
  wordsList.forEach((word) => {
    result[word] = (result[word] || 0) + 1;
  });
  return result;
}

fs.readFile(link, "utf-8", (_, text) => {
  breakIntoParagraphs(text);
  // checkDuplicatedWords(text);
});

function breakIntoParagraphs(text) {
  const paragraphs = text.toLowerCase().split("\n");
  const counter = paragraphs.map((paragraph) => {
    return checkDuplicatedWords(paragraph);
  });
  console.log(counter);
}
