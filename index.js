let fs = require("fs");

const url = "./docs/《东宫变》前传之春华传/index.md";
const splitWord =
  "%E3%80%8A%E4%B8%9C%E5%AE%AB%E5%8F%98%E3%80%8B%E5%89%8D%E4%BC%A0%E4%B9%8B%E6%98%A5%E5%8D%8E%E4%BC%A0%20c3c8c02cdca844d189695832eb10f540/";

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
