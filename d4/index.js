const fs = require("fs");
const path = require("path");

//fsappendFileSync

let appendFileSync = (file) => fs.appendFileSync(file, "- AppendFileSyns");

//?fs.unlink

let unLink = (file) =>
  fs.unlink(file, (err) => {
    if (err) throw err;
    console.log(`\nDeleted file: ${file}`);
  });

//fs.existsSync

let fileExists = (file) => {
  let existsSyns = fs.existsSync(file);
  console.log(existsSyns);
};

//fs.readdir
let readDir = (file) => {
  fs.readdir(file, (err, files) => {
    if (err) console.log(err);
    console.log(files);
  });
};

//fs.mkdir

let mkDir = (file, name) => {
  fs.mkdir(path.join(file, name), (err) => {
    if (err) throw err;
    console.log("Directory created successfully!");
  });
};

//fs.rmdir

let rmDir = (file) => {
  fs.rmdir(file, (err) => {
    if (err) throw err;
    console.log("Folder Deleted!");
  });
};

//fs.rename

let renameFile = (oldFile, newFile) => {
  fs.rename(oldFile, newFile, (err) => {
    if (err) throw err;
    console.log("File Renamed");
  });
};

//fs.rm

let removeFile = (fileName) => {
  fs.rm(fileName, { recursive: true }, (err) => {
    if (err) throw err;
    console.log("File Deleted");
  });
};

//! All functions

//? appendFileSync("fs_append.txt");

//? fileExists("./fs_append.txt");

//?unLink("example.txt");

// readDir("../d4");

mkDir(__dirname, "Nikola");

// rmDir("./Nikola");

removeFile("./Nikola");

//? renameFile("./text.txt", "./text1.txt");
