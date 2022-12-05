//1
let year = prompt("Та жилээ оруулна уу.");
let month = prompt("Та сараа оруулна уу.");
let day = prompt("Та өдөрөө оруулна уу.");

let yearNumber = Number(year);
let monthNumber = Number(month);
let dayNumber = Number(day);

if(Number.isInteger(yearNumber) && yearNumber > 0){
    if(Number.isInteger(monthNumber) && yearNumber > 0){
        if(Number.isInteger(dayNumber) && yearNumber > 0){
            if(year.length == 4){
                if(month.length < 2 && day.length < 2){
                    month = month.length == 1 ? "0" + month : month;
                    day = day.length == 1 ? "0" + day : day;
                    let result = year + "-" + month + "-" + day;
                    alert(result);
                } else {
                    alert("Утга буруу байна.")
                }
            } else{
                alert("Та жилээ зөв оруулна уу.")
            }
        } else{
            alert("Та сараа зөв оруулна уу.")
        }
    } else{
        alert("Та өдөрөө зөв оруулна уу.")
    }
} else {
    alert("Та зөв утга оруулна уу.")
}

// Та өдөрөө зөв оруулна уу.
// Та сараа зөв оруулна уу.
// Та жилээ зөв оруулна уу.
//2


// let utas = prompt(`Та утасны дугаараа оруулна уу.`);
// let utga = Number(utas)
// let g = utas.substring(0, 2);
// if (Number.isInteger(utga)) {
//     if (utas.length > 7 && utas.length < 9) {
//         if(g == 99 || g == 95 || g == 85 || g == 94){
//             console.log(`${g} Mobicom`);
//         } 
//         else if (g == 88 || g == 80 || g == 86 || g == 89) {
//             console.log(`Unitel`);
//         }
//         else if (g == 93 || g == 98 || g == 97 || g == 83) {
//             console.log(`G-Mobile`);
//         }
//         else if (g == 91 || g == 96 || g == 90) {
//             console.log(`Skytel`);
//         }
//         else if (g == 66 || g == 60) {
//             console.log(`ONDO`);
//         }
//         else {
//             console.log(alert("Эхний 2 орон буруу байна. :)"));   
//         }

//     }else {
//         console.log(alert("Та 8н оронтой дугаар оруулна уу! ;)"));
//     }
        
// } else {
//     console.log(alert("Зөвхөн тоо оруулна уу."));
// }


























