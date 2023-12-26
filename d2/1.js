//? Da se kreira modul potpisano kako vaga.js - i da ima metodi kade shto kje konvertira grama vo kilogrami i obratno
//? Da se kreira modul potpisan kako valuta - i da ima metodi koi sto kje konvertiraat evra vo denar, evra vo dolari, denari vo dolari i obratno
//? Da se kreira modul po vasha zelba

// Kilogram and Gram convertor 
const {gramToKilogram,kilogramToGram} = require ("./vaga")

gramToKilogram(10)
kilogramToGram(10)
console.log("------------------------------------------------")


//Valutes convetor 
const {euroToDollar,dollarToEuro,euroToDenar,denarToEuro,dollarToDenar,denarToDollar} = require ("./valuta")
 
euroToDollar(1);
dollarToEuro(1);
euroToDenar(1);
denarToEuro(1);
dollarToDenar(1);
denarToDollar(1);
console.log("------------------------------------------------")

//Electrical Converion Formulas
const {toWatts,toAmps,toVolts} = require ("./watts")

toWatts(10,120)
toAmps(3600,120)
toVolts(2400,10)
console.log("------------------------------------------------")