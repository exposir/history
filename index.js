let fs = require("fs");

const url = "./docs/内参治国的那些事/index.md";
const splitWord =
  "%E2%80%9C%E5%86%85%E5%8F%82%E6%B2%BB%E5%9B%BD%E2%80%9D%E7%9A%84%E9%82%A3%E4%BA%9B%E4%BA%8B%E2%80%A6%E2%80%A6%208d80fb69b3ff482fb66075208270fe75/";

const init = () => {
  console.log(123);

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
