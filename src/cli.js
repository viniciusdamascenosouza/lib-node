import fs from "fs";
import handlesErrors from "./errors/functionsErrors.js";
import { countsWords } from "./index.js";

const filePath = process.argv[2];

fs.readFile(filePath, "utf-8", (error, text) => {
  try {
    if (error) throw error;
    countsWords(text);
  } catch (error) {
    handlesErrors(error);
  }
});
