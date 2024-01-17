//? Da se kreira modul potpisan kako valuta - i da ima metodi koi sto kje konvertiraat evra vo denar, evra vo dolari, denari vo dolari i obratno

function euroToDollar(euro) {
  let euroConverter =
    euro < 0 ? console.log("Please enter a positive number!") : euro * 1.1;
  let fixConverter = euroConverter.toFixed(2);
  console.log(`${arguments[0]} Euro is ${fixConverter} $`);
}

function dollarToEuro(dollar) {
  let dollarConverter =
    dollar < 0 ? console.log("Please enter a positive number!") : dollar * 0.9;
  let fixConverter = dollarConverter.toFixed(2);
  console.log(`${arguments[0]} $ is ${fixConverter} Euro`);
}

function euroToDenar(euro) {
  let euroConverter =
    euro < 0 ? console.log("Please enter a positive number!") : euro * 61.59;
  let fixConverter = euroConverter.toFixed(2);
  console.log(`${arguments[0]} Euro is ${fixConverter} Denara`);
}

function denarToEuro(denar) {
  let denarConverter =
    denar < 0 ? console.log("Please enter a positive number!") : denar * 0.016;
  let fixConverter = denarConverter.toFixed(3);
  console.log(`${arguments[0]} Denara is ${fixConverter} Eura`);
}

function dollarToDenar(dollar) {
  let dollarConverter =
    dollar < 0
      ? console.log("Please enter a positive number!")
      : dollar * 55.94;
  let fixConverter = dollarConverter.toFixed(2);
  console.log(`${arguments[0]} $ is ${fixConverter} Denara`);
}

function denarToDollar(denar) {
  let denarConverter =
    denar < 0 ? console.log("Please enter a positive number!") : denar * 0.018;
  let fixConverter = denarConverter.toFixed(3);
  console.log(`${arguments[0]} Denara is ${fixConverter} $`);
}

module.exports = {
  euroToDollar,
  dollarToEuro,
  euroToDenar,
  denarToEuro,
  dollarToDenar,
  denarToDollar,
};
