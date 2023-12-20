//? DOMASNA ZADACHA
const studenti = [
    { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
    { ime: 'Vesna', prosek: 9.7, grad: 'Skopje' },
    { ime: 'Atanas', prosek: 10, grad: 'Skopje' },
    { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
    { ime: 'Muhamed', prosek: 10, grad: 'Kumanovo' },
    { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
    { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
    { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
    { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
    { ime: 'Simona', prosek: 5.2, grad: 'Bitola' },
    { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
    { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
    { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
    { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
  ];
  //? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7 pordedeni po ime(rasyechki)
  //? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki
  //? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
  //? 4. Vkupen prosek na studenti koi se od Kumanovo
  //? 5. Prosek na prosecite od gradovite Skopje i Ohrid
  //? 6. Da se dodade usgte eden student so ime Goran prosek 8.3 i Strumica
  //? 7. Da se izbrishe prviot student vo studenti
  //? 8. Da se kreira nov array kade shto studentite od Ohrid, Skopje i Kumanovo kade shto ocenkite so prosek se za 1 pogolem (Dinamichki)

  
//1
    let domasna1 = studenti.sort((a,b)=> a.ime.localeCompare(b.ime)).filter(element => element.ime.endsWith("a") && element.grad == "Skopje" && element.prosek > 7)
    console.log(domasna1)

//2
    let domasna2 = studenti.sort((a,b)=> b.prosek - a.prosek).filter(element => element.grad !== "Skopje" && element.prosek > 9)
    console.log(domasna2)

//3
    let domasna3 = studenti.sort((a,b)=> b.prosek - a.prosek).filter(element => element.ime.length == 5).slice(0,3)
    console.log(domasna3)

//4
    let domasna4 = studenti.filter(element => element.grad == "Kumanovo").reduce((acc,value)=>{return acc+value.prosek},0)
     console.log(domasna4)

//5
    let domasna5 = studenti.filter(element => element.grad == "Skopje" || element.grad == "Tetovo" || element.grad == "Kichevo").reduce((acc,value)=>{return acc+value.prosek},0)
    console.log(domasna5)
    
//6
    let domasna6 = studenti.push({ ime: 'Goran', prosek: 8.3, grad: 'Strumica' })
    console.log(studenti)

//7
    let studenti1 = [...studenti]
    let domasna7 = studenti1.shift()
    console.log(studenti1)


//8 
    let domasna8 = studenti.filter(element => element.grad == "Skopje"  || element.grad == "Kumanovo" || element.grad == "Ohrid").map(element => ({
        ime: element.ime, 
        prosek: element.prosek + 1,
        grad: element.grad 
    }))
    console.log(domasna8)