//1

let i = 4 > 3; //true
console.log(i);
let iii = 4 < 3; //false
console.log(iii);
let ii = 4 >= 3; //true
console.log(ii);
let iv = 4 <= 3; //false
console.log(iv);
let v = 4 == 4; //true
console.log(v);
let vi = 4 === 4; //true
console.log(vi);
let vii = 4 != 4; //false
console.log(vii);
let viii = 4 !== 4; //false
console.log(viii);
let ix = 4 != "4"; //false
console.log(ix);
let x = 4 == "4"; //true
console.log(x);
let xi = 4 === "4"; //false
console.log(xi);

//2

let one = 4 > 3 && 10 < 12; //true
console.log(one);
let two = 4 > 3 && 10 > 12; //false
console.log(two);
let three = 4 > 3 || 10 < 12; //true
console.log(three);
let four = 4 > 3 || 10 > 12; //true
console.log(four);
let five = !(4 > 3); //false
console.log(five);
let six = !(4 < 3); //true
console.log(six);
let eight = !(4 > 3 && 10 < 12); //false
console.log(eight);
let nine = !(4 > 3 && 10 > 12); //true
console.log(nine);
let ten = !(4 === "4"); //true
console.log(ten);

//3

let myAge = 23;
let yourAge = prompt("Nasaa oruulna uu");
if (myAge < yourAge){
    console.log("ta nadaas ah");
 } else if ( myAge == yourAge){
    console.log("2laa chyatsuu ym bnaa bro");
 } 
else{
    console.log("chi nadaas duu");
}

//4

// let day = prompt("ta uduruu songono");
// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Ажлийн өдөр");
//         break;
//     case 6:
//     case 7:
//         default:
//         console.log("Амралт");
// }

let day = prompt("uduruu songono uu");
let weekend = 7;
let limit = 5;
if (day <= limit){
    console.log("Ажлийн өдөр");
} else if(weekend < day){
    console.log("bhgv");
    day = prompt("uduruu dahin songono uu");
    
}
else {
    console.log("Амралтын өдөр");
   
}

//5

let hours = prompt("Ajilsan tsagaa oruulna uu");
let ratePerHour = 28;
let tsalin = hours * ratePerHour;
console.log(tsalin);