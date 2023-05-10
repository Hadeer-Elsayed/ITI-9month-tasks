let myInfo = {
    fName: "Nourhan",
    lName: "Ahmed",
    age: 25,
    job: "developer",
    [Symbol.iterator]: function() {
        let keys = Object.keys(myInfo);
        let counter = 0;
        return {
            "next": function() {
                if(counter === keys.length) {
                    return {value: undefined, done: true}
                }
                else {
                    return {
                        value: myInfo[keys[counter++]], done: false
                    }
                }
            }
        }
    } 
}

for(elm of myInfo) {
    console.log(elm);
}