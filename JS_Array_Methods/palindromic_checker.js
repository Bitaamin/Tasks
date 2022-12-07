let number = prompt("palindromic too shalgana uu");
console.log(typeof(number));

let f = Number(number)
// console.log(typeof(f));
//55 = false
//skskd = true
console.log(Number.isNaN(f));

    if(!Number.isNaN(f)){
//88
        let arr = number.split('')

       console.log( arr.reverse().join(''))

       if(number == arr.reverse().join('')) {
        console.log("palei");
       }

        // if()


        // number.reverse = number;
        // console.log(number);
    }