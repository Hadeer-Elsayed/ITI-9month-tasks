var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(fruits.every(fruit => {
    return typeof fruit === "string";
}));

console.log(fruits.some(fruit => {
    return fruit.startsWith("s");
}));

let newFruits = fruits.filter(fruit => {
    return fruit.startsWith("s") || fruit.startsWith("b");
});
console.log(newFruits);

let newFruits2 = fruits.map(fruit => {
    return `I like ${fruit}`;
});
console.log(newFruits2);

fruits.forEach(fruit => {
    console.log(fruit);
});