function * fib1(num) {
    yield 0;
    yield 1;
    let a = 0, b = 1, fibNum = a + b; 
    while(fibNum <= num) {
        yield fibNum;
        a = b;
        b = fibNum;
        fibNum = a + b;
    }
}
for(elem of fib1(12)) {
    console.log(elem);
}

function * fib2(num) {
    yield 0;
    yield 1;
    let a = 0, b = 1, fibNum = a + b, count = 3; 
    while(count <= num) {
        yield fibNum;
        a = b;
        b = fibNum;
        fibNum = a + b;
        count++;
    }
}
for(elem of fib2(5)) {
    console.log(elem);
}