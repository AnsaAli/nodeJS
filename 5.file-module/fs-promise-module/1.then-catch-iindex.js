//require fs promise module
const fs = require("fs/promises");

fs.readFile("../demo.txt", 'utf-8')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
