const { rejects, fail } = require("assert");
const { error } = require("console");
const fs = require("fs");
const { resolve } = require("path");

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const fileWrite = (fileName, text) => {
  return new Promise((success, fail) => {
    fs.writeFile(fileName, text, `utf-8`, (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

//?1 Dodavanje na student od fajlot

const arrayAdd = async () => {
  try {
    let tryRead = await fileRead("./studenti.json");
    let parse = JSON.parse(tryRead);
    parse.push({
      ime: "Aleksej",
      prezime: "Bjelogrlic",
      prosek: 7.1,
      grad: "Beograd",
    });
    let stringi = JSON.stringify(parse);
    await fileWrite("./studenti.json", stringi);
  } catch (error) {
    console.log(error);
  }
};

//?2 Brishenje na student od fajlot

let arrayDelete = async () => {
  try {
    let tryRead = await fileRead("./studenti.json");
    let parse = JSON.parse(tryRead);
    let filterArray = parse.filter((data) => data.ime !== "Aleksej");
    let stringi = JSON.stringify(filterArray);
    await fileWrite("./studenti.json", stringi);
    console.log(parse);
  } catch (error) {
    console.log(error);
  }
};

//?3 Menuvanje na podatooci na student od fajlot

let arrayChange = async () => {
  try {
    let tryRead = await fileRead("./studenti.json");
    let parse = JSON.parse(tryRead);
    let filterArray = parse.map((data) => ({
      ime: "Viktorija",
      prezime: data.prezime,
      prosek: data.prosek,
      grad: data.grad,
    }));
    let stringi = JSON.stringify(filterArray);
    await fileWrite("./studenti1.json", stringi);
    console.log(parse);
  } catch (error) {
    console.log(error);
  }
};

//?4 Chitanje na site studenti od fajlot

let arrayRead = async () => {
  try {
    let tryRead = await fileRead("./studenti.json");
    let parse = JSON.parse(tryRead);
    console.log(parse);
  } catch (error) {
    console.log(error);
  }
};

//arrayAdd();
//arrayDelete();
//arrayChange();
//arrayRead();
