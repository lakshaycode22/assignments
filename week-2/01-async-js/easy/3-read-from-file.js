const fs = require("node:fs");

function readFile() {
  fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log(data);
  });
}

readFile()
let sum = 0;
for(let i = 0; i < 1000000000; i++){
    sum += i;
}
console.log(sum)
