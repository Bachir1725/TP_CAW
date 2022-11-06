const { readFileSync, promises: fsPromises } = require("fs");
var inputFileName = process.argv[2];
var stringYouLookingFor = process.argv[3];
function checkIfContainsSync(filename, str) {
  const contents = readFileSync(filename, "utf-8");

  const result = contents.includes(str);
  if (result) {
    console.log(filename, result);
  } else {
    console.log("NONE");
  }
}

checkIfContainsSync(`${inputFileName}`, `${stringYouLookingFor}`);
