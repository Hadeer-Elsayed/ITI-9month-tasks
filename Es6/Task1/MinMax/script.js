function minMax(...arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [max, min];
}

let [x, y] = minMax(-4, 500, 20, 33);
let [a, b] = minMax(0, 2, 400, -100, 55);
let [n, m] = minMax(60, 3, 11);
console.log(x, y);
console.log(a, b);
console.log(n, m);