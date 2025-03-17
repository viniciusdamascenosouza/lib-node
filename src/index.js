export function countsWords(text) {
  const paragraphs = extractParagraphs(text);
  const count = checkDuplicateWords(paragraphs);
  console.log(count);
}

function extractParagraphs(text) {
  return text.toLowerCase().split("\n");
}

function cleanWords(word) {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function checkDuplicateWords(paragraphs) {
  const result = {};
  paragraphs.forEach((paragraph) => {
    const wordList = paragraph.split(" ");
    wordList.forEach((word) => {
      if (word.length >= 3) {
        const cleanWord = cleanWords(word);
        result[cleanWord] = (result[cleanWord] || 0) + 1;
      }
    });
  });
  return result;
}
