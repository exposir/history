let fs = require("fs");

const url = "./docs/周末快乐/index.md";
const splitWord = "唯⼀微博：群众岱岱";

const init = () => {
  fs.readFile(url, function (err, data) {
    const stringData = data.toString();

    console.log(stringData);

    const newData = stringData.split(splitWord).join("");

    fs.writeFile(url, newData, function (err) {
      if (err) {
        return console.error(err);
      }
    });
  });
};

init();
