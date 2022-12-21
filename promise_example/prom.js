function turnInPC(isElect) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isElect ? resolve("PC aslaa") : reject("toggui bna")
        }, 1000)
    })
}

function openSteam(isConnection) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isConnection ? resolve("opened Steam") : reject("Internettei holbono uu")
        }, 1000)
    })
}
function chooseTheGame(togloom_songoh) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let games = [{ id: 1, name: "CSGO" }, { id: 2, name: "Dota" }, { id: 3, name: "Valorant" }];
            let choose = prompt("togloomiin ner")
            for (let i = 0; i < games.length; i++) {
                if (games[i].name == choose) {
                    console.log(games[i]);
                } else{
                    reject("Togloom oldsongvie")
                } 
            }
        }, 1000)
    })
}

turnInPC(true).then((result) => {
    console.log(result);
    return openSteam(true);
}).then((res) => {
    console.log(res);
    return chooseTheGame();
}).then((res) => {
    console.log(res);
})

// console.log(turnInPC);


// console.log(openSteam);





// let combined = Promise.all([turnInPC(), openSteam()])

// console.log(combined);






// function washPot() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ready pot");
//     }, 1000);
//   });
// }

// function fillWater(watersize) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (watersize == 100) {
//         resolve([{ id: 1, name: "water full" }]);
//       } else {
//         reject("sav duureegui bna");
//       }
//     }, 2000);
//   });
// }


// washPot()
//   .then((result) => {
//     console.log(result);
//     return fillWater(100);
//   })
//   .then((result) => {
//         console.log(result);
//         return putIntoFire(true);
//       })