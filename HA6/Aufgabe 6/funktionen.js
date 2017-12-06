
const persons = [
['Max', 1967, 2, 'm'],
['Maria', 1990, 1, 'f'],
['Meik', 1982, 2, 'm'],
['Mareike', 1985, 3, 'f'],
['Mervin', 1971, 1, 'm'],
['Magdalena', 1979, 1, 'f'],
];




function filterGender(personsArray, gender) {
    return personsArray.filter(e => e[3] === gender)
}

//console.log(filterGender(persons,'f'))



function getAge(personsArray) {
   return personsArray.map(e=>[e[0], new Date().getFullYear()-e[1]])
}

//console.log(getAge(persons))


function getSortedStatus(personsArray) {
    var status = personsArray.map(e=>[e[0], (new Date().getFullYear()-e[1])*e[2]])
    return status.sort(compare)
}

function compare(a, b) {
  if (a[1]>b[1]) {
    return -1;
  }
  if (a[1]<b[1]) {
    return 1;
  }
  return a[0]>b[0]; //Buchstaben
}

//console.log(getSortedStatus(persons))





function getNames(personsArray) {
    return personsArray.map(e=>e[0])
}
//console.log(getNames(persons))



function getAggregatedAge(personsArray) {
    var a = getAge(personsArray)
    var b = a.map(e=>e[1])
    return b.reduce((a,b)=>a+b)
}
//console.log(getAggregatedAge(persons))


function getAmount(personsArray) {
  return { Woman: filterGender(personsArray, 'f').length, Men: filterGender(personsArray, 'm').length }
}

//console.log(getAmount(persons))