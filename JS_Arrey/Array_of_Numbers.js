let numbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let i = 0;
let sum = 0;
while(i < numbers.length){
    sum += numbers[i]
    i++
}
console.log(sum);

// let numbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let max = 0;
for (let a = 0; a < numbers.length; a++) {
    if (max < numbers[a]) {
        max = numbers[a];
    }
}
console.log(max);

let min = 43;
for (let a = 0; a < numbers.length; a++){
    if(min >= numbers[a]){
        min = numbers[a]
    } 
}
console.log(min);

numbers.unshift("666")
numbers.push("999")
console.log(numbers);