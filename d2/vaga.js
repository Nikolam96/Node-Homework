//? Da se kreira modul potpisano kako vaga.js - i da ima metodi kade shto kje konvertira grama vo kilogrami i obratno

function kilogramToGram(kilogram) {
  return kilogram < 0 ? console.log("Enter a positive number!") : console.log(`${kilogram} kg is ${kilogram * 1000} g`)
}

function gramToKilogram(gram) {
  return  gram < 0 ? console.log("Enter a positive number!") : console.log(`${gram} g is ${gram / 1000} kg`)
}

module.exports = {kilogramToGram,gramToKilogram}
