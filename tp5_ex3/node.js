const { readFileSync, promises: fsPromises } = require("fs");
const glob = require("glob");
const process = require("process");
var fileName = process.argv[2];
var input = process.argv[3];


function checkIfContainsSync(filename, str) {
  const contents = readFileSync(filename, "utf-8");

  const result = contents.includes(str);

  if (result) {
    // console.log(filename);
    return filename;
  }
}

var getDirectories = function (src, callback) {
  glob(src + "/**/*.txt", callback);
};
getDirectories(`${fileName}`, function (err, res) {
  allFileNamesFounded = [];
  res.forEach((element) => {
    checkIfContainsSync(`${element}`, `${input}`) == undefined
      ? " "
      : allFileNamesFounded.push(checkIfContainsSync(`${element}`, `${input}`));
  });
  if (allFileNamesFounded.length == 0) {
    console.log("NONE");
  } else {
    allFileNamesFounded.forEach((element) => {
      console.log(element);
    });
  }
});
