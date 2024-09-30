//-------(01)-------//
function CalculateDifference(x, y){
    return x - y;
}
let result = CalculateDifference(30, 10);
console.log(result);

//-------(02)-------//
function isOdd(num){
    return num % 2 !== 0 ;
}
console.log(isOdd(9));
console.log(isOdd(16));

//-------(03)-------//
function findMin(arr){
    return Math.min(...arr);
}
console.log(findMin([5, 10 , 3, 14, 2]));

//-------(04)-------//
function filterEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1,4,7,8,12,24,5]));

//-------(05)-------//
function sortArrayDescending(arr){
    return arr.sort((x, y) => x -y );
}
console.log(sortArrayDescending([10,60,5,30,55,44,20,77]));
//-------(06)-------//
function lowercaseFirstLetter (str){
   if (str.length === 0);
   return str;
   str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello World"));

//-------(07)-------//
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Mehjabin"));

//-------(08)-------//
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const arr = [10, 20, 30, 40, 50];
const average = findAverage(arr);
console.log("findAverage:", average);
