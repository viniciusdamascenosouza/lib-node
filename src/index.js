const fs = require("fs");

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, "utf-8", (error, text) => {
  if (error) {
    console.log("What is the error?", error.code);
    return;
  }
  countsWords(text);
});

function countsWords(text) {
  const paragraphs = extractParagraphs(text);
  const count = paragraphs.flatMap((paragraph) => {
    if (!paragraph) return [];
    return checkDuplicateWords(paragraph);
  });
  console.log(count);
}

function extractParagraphs(text) {
  return text.toLowerCase().split("\n");
}

function cleanWords(word) {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function checkDuplicateWords(text) {
  const wordList = text.split(" ");
  const result = {};
  wordList.forEach((word) => {
    if (word.length >= 3) {
      const cleanWord = cleanWords(word);
      result[cleanWord] = (result[cleanWord] || 0) + 1;
    }
  });
  return result;
}
