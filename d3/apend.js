const fs = require("fs");

let append = (fileName, data) => {
  return new Promise((resolve, rejects) => {
    fs.appendFile(fileName, data, (err) => {
      if (err) return rejects(err);
      return resolve();
    });
  });
};

const appenSyns = async () => {
  try {
    await append(`text.txt`, `Nikola ima 25gd`);
    await fileRead(`text.txt`);
  } catch (error) {
    console.log(error);
  }
};
