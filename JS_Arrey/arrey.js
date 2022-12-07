let numbers = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let i = 0, tegsh = 0; 
let a = 0; 
while (i < numbers.length) {
    if (numbers[i] % 2 == 0) {
        tegsh ++ 
    } else {
        a ++

    }
    i++
}
console.log(tegsh);
console.log(a );
