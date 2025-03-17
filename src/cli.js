import fs from "fs";
import handlesErrors from "./errors/functionsErrors.js";
import { countsWords } from "./index.js";

const filePath = process.argv;
const link = filePath[2];
const address = filePath[3];

fs.readFile(link, "utf-8", (error, text) => {
  try {
    if (error) throw error;
    const result = countsWords(text);
    createAndSaveFile(result, address);
  } catch (error) {
    handlesErrors(error);
  }
});

async function createAndSaveFile(listWords, address) {
  const newFile = `${address}/result.txt`;
  const textWords = JSON.stringify(listWords);
  try {
    await fs.promises.writeFile(newFile, textWords);
    console.log("file created");
  } catch (error) {
    throw error;
  }
}
