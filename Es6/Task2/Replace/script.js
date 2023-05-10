let str1 = "Hello World";
let str2 ="I love learning javaScript";
let obj = {
    [Symbol.replace]: function(str) {
        if(str.length > 15) {
            return str.substring(0, 14) + "...";
        }
        else {
            return str;
        }
    }
}

let res1 =str1.replace(obj);
let res2 =str2.replace(obj);

console.log(res1);
console.log(res2);