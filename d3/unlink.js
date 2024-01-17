const fs = require("fs");

let unlink = (fileName) => {
  return new Promise((resolve, rejects) => {
    fs.unlink(fileName, (err) => {
      if (err) return rejects(err);
      return resolve();
    });
  });
};

const appenSyns = async () => {
  try {
    await unlink(`text.txt`);
  } catch (error) {
    console.log(error);
  }
};
