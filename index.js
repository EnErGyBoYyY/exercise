let sum = 0;
// console.log(sum);
const title3 = "Titanic3";
// console.log(title3);
let boolean = true // false
// console.log(boolean);

let array = [
    sum, title3, boolean
];
// console.log(array);

let object = {
    sum: 20,
    title3: "titanic",
    boolean: true
}
// console.log(object);

const displayItems = (passedArray) => {
    for (let item of passedArray) {
        console.log(item)
    }
}
displayItems(array)