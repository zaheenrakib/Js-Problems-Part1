/*
array has some duplicate element;
*/

const biriyaniKhor = ['abul','bulbul','cabul','mukbul','subole','bulbul','abul'];

const numbers = [1,3,2,2,3,1,3,56,78,5,3,2,3]

function noDuplicate(array){
    const unique = [];
    for (const item of array){
        if(unique.includes(item)=== false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(numbers);
const uniqueArray2 = noDuplicate(biriyaniKhor);
console.log(uniqueArray);