// 1

let arrayNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let i = 0;
let sum = 0;
while (i < arrayNumbers.length) {
    sum = sum + arrayNumbers[i];
    i++
} console.log(sum);

// 2
let c = 0;
let max = 0;
while (c < arrayNumbers.length) {
    if (max < arrayNumbers[c]) {
        max = arrayNumbers[c]
    }
    c++
}
console.log(max);


// 3 

c = 0;
let min = 43;
while (c < arrayNumbers.length) {
    if (min > arrayNumbers[c]) {
        min = arrayNumbers[c]
    }
    c++
}
console.log(min);

