const fs = require("node:fs");

const content = "Some content!";
function write() {
  fs.writeFile("./file.txt", content, (err) => {
    // file written successfully
  });
}
write();
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}
console.log(sum);
