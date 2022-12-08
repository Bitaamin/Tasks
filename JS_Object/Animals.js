let animals = [
    {
        type: "dog",
        sound: "woof"
    },
    {
        type: "cow",
        sound: "moo"
    },
    {
        type: "cat",
        sound: "meow"
    }
]
// console.log(animals.length);
function MyFunc() {
    for (i = 0; i < animals.length; i++) {
        console.log(animals[i].sound);
    }            
}
MyFunc()
