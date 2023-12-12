const fs = require("node:fs");

let content = "";

function write() {
    fs.writeFile("./file.txt", content, (err) => {
      // file written successfully
      console.log(content);
    });
  }
  

function read() {
  fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log(data);
    content = data;
    content = content.replace(/\s+/g,' ').trim();
    write();
  });
}


read();


