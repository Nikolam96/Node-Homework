// fs
const { profileEnd } = require("console");
const fs = require("fs");
const { connect } = require("http2");

// //Sinhrona Verzija
// // const citanjenaText = fs.readFileSync("./text.txt", "utf-8");
// // console.log(citanjenaText);
// // const podatok = `ovo hocemo da zapisemo u kompjuter ${2 + 2}`;

// // fs.writeFileSync(`./novTeks.txt`, podatok);
// // console.log(podatok);

// //Callback
// // function pozdrav(ime, callback) {
// //   console.log(`Zdravo ,${ime}`);
// //   callback();
// // }

// // function cao() {
// //   console.log(`chao!`);
// // }

// // pozdrav("Nikola", cao);

// // // Async

// // fs.readFile(`./novTeks.txt`, `utf-8`, (err, text) => {
// //   if (err) {
// //     return console.log(err);
// //   }
// //   console.log(text);
// // });

// // fs.writeFile(`./asyn.txt`, `async text`, `utf-8`, (err) => {
// //   console.log(`uspeshno`);
// // });

// // //Promise pattern

// // //Step 1
// // // const writeFile = () ={};
// // //Step 2
// // const writeFile = () => {
// //   return new Promise();
// // };
// // //step 3
// // const writeFile = () => {
// //   return new Promise(() => {});
// // };
// // //step 4
// // const writeFile = () => {
// //   return new Promise((resolve, rejects) => {});
// // };
// // // step 5
// // const writeFile = () => {
// //   return new Promise((resolve, rejects) => {
// //     if (resolve) {
// //         fs.writeFile(`data.txt`, `Hello world from node`, `utf-8`, (err) => {
// //             if (err) return console.log(err);
// //         console.log(`Zapison je napravljen`);
// //       });
// //     }
// //   });
// // };
// // //Step 6
// // const fileWrite = () => {
// //     return new Promise (resolve,rejects) => {
// //       fs.writeFile(`data.txt`, `Hello world from node`, `utf-8`, (err) => {
// //         console.log(err) return rejects(err)}
// // )
// // }}

// //
// const fileWrite = (filename, data) => {
//   return new Promise((success, fail) => {
//     fs.writeFile(filename, data, "utf-8", (err) => {
//       if (err) return fail(err);
//       return success();
//     });
//   });
// };

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

// const main = async () => {
//   try {
//     // await fileWrite("data1.txt", "Nov fajl zapis od promise!");
//     // await fileWrite("data4.txt", "Nov fajl zapis od promise!");
//     // await fileWrite("data3.txt", "Nov fajl zapis od promise!");
//     // await fileWrite("data2.txt", "Nov fajl zapis od promise!");
//     const primer = await fileRead("text.txt");
//     console.log(primer);
//   } catch (err) {
//     console.log(err);
//   }
// };

// main();
// //! Promisot moze da bide
// //Pending: Incijaljna sostojba, ne e ni ispolent i odbien promisot
// //Fulfilled ili success: Oznacuva deka operacijata zavrshila uspesno
// //Rejected ili fail: Oznachuva deka operacijata zavrsila so greska

// const imenik = [
//   {
//     ime: "Pero Presoki",
//     telefon: 223305,
//   },
//   {
//     ime: "Janko Jankoski",
//     telefon: 232305,
//   },
//   {
//     ime: "Stanko Stankovski",
//     telefon: 222555,
//   },
// ];

// fs.unlink("delete.txt", (err) => {
//   if (err) console.log(err);
//   else {
//     console.log("\nDeleted file: delete.txt");
//   }
// });

// const deleteFile = (fileName) => {
//   return new Promise((succ, fail) => {
//     fs.unlink(fileName, (err) => {
//       if (err) {
//         return fail(err);
//       } else {
//         return succ();
//       }
//     });
//   });
// };

// const deleted = async () => {
//   try {
//     await deleteFile(`delete.txt`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// deleted();

// const files = (fileName, data) => {
//   return new Promise((succ, fail) => {
//     fs.writeFile(fileName, data, `utf-8`, (err) => {
//       if (err) return fail(err);
//       return succ();
//     });
//   });
// };

// const file = async () => {
//   try {
//     await files(`test.txt`, `Nikola je car`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// file();

// let fileExists = fs.existsSync("hello.txt");

// console.log("text.txt exists:", fileExists);

(async () => {
  try {
    let dataString = await fileRead("imenik12.json");
    let data = JSON.parse(dataString);
    let sortedData = data.sort((a, b) => a.prosek - b.prosek);
    let min = sortedData.reduce((acc, curr) =>
      acc.prosek < curr.prosek ? acc : curr
    );

    let prosek = sortedData.reduce((acc, curr) => {
      return acc + curr.prosek;
    }, 0);
    console.log(prosek);
    let average = prosek;

    console.log(min);
  } catch (err) {
    console.log(err);
  }
})();

const handler = (req, res) => {
  console.log(req);
};

const http = require(`http`);

const server = http.createServer((req, res) => {
  res.end(`Hello world`);
});

server.listen(10000, `127.0.0.1`, (err) => {
  if (err) console.log(`error`);
  console.log(`server stardet on port 10000`);
});
