
//Array.reduce()  Die Methode reduce () wendet eine Funktion auf einen Akkumulator und auf jedes Element im Array an (von links nach rechts), um sie auf einen einzelnen Wert zu reduzieren.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15






//Die Methode map () erstellt ein neues Array mit den Ergebnissen des Aufrufs einer bereitgestellten Funktion für jedes Element im aufrufenden Array.
var array2 = [1, 4, 9, 16];

// pass a function to map
const map1 = array2.map(x => x * 2);

console.log("map: "+map1);
// expected output: Array [2, 8, 18, 32]







//Die forEach () -Methode führt eine bereitgestellte Funktion einmal für jedes Array-Element aus.

const arr = ['a', 'b', 'c'];

arr.forEach(function(element) {
    console.log("forEach: " +element);
});

// a
// b
// c






//Die Methode filter () erstellt ein neues Array mit allen Elementen, die den von der bereitgestellten Funktion implementierten Test bestehen.
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log("filter: " +result);
// expected output: Array ["exuberant", "destruction", "present"]







//Die every () -Methode testet, ob alle Elemente im Array den von der bereitgestellten Funktion implementierten Test bestehen.
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array4 = [1, 30, 39, 29, 10, 13];

console.log("every: "+array4.every(isBelowThreshold));
// expected output: true





//Die Methode some () testet, ob mindestens ein Element im Array den von der bereitgestellten Funktion implementierten Test besteht.
function isBiggerThan10(element, index, array) {
  return element > 10;
}

console.log("some1: "+[2, 5, 8, 1, 4].some(isBiggerThan10)); // false
console.log("some2: "+[12, 5, 8, 1, 4].some(isBiggerThan10)); // true





//Die Methode find () gibt den Wert des ersten Elements im Array zurück, das die angegebene Testfunktion erfüllt. Andernfalls wird undefined zurückgegeben.
function isBigEnough(element) {
  return element >= 15;
}

console.log("find: " + [12, 5, 8, 130, 44].find(isBigEnough)); // 130







//Die Methode sort () sortiert die Elemente eines Arrays und gibt das Array zurück. Die Sorte ist nicht unbedingt stabil. Die Standardsortierreihenfolge entspricht String-Unicode-Codepunkten.
var fruit = ['cherries', 'apples', 'bananas'];
console.log("sort: "+fruit.sort()); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 21, 2]; 
console.log(scores.sort()); // [1, 10, 2, 21]
// Note that 10 comes before 2,
// because '10' is mix of two characters '1' and '0' so '10' is before '2' in Unicode code point order.

var things = ['word', 'Word', '1 Word', '2 Words'];
console.log(things.sort()); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.