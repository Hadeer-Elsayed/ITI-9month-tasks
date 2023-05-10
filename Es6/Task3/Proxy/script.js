let obj = {
    name: "",
    address: "",
    age: null
}

let regex1 = /[a-zA-Z]/;
let handler = {
    set(target,prop,value) {
        if(target.hasOwnProperty(prop)) {
            if(prop == "name") {
                if(regex1.test(value)) {
                    if(value.length === 7)
                        target[prop]=value;
                    else
                        throw "Must be 7 characters";
                }
                else {
                    throw "Invalid Value";
                }
            }
            else {
            if(prop == "address") {
                if(typeof value === "string") 
                    target[prop]=value;
                else
                    throw "Invalid Address"
            }
            else {
                if(value >= 25 && value <= 60) {
                    target[prop]=value;
                }
                else {
                    throw "Invalid Age"
                }
            }
        }
        }
        else {
            throw "Doesn't Exist";
        }
    },
    get(target,prop){
        if(target.hasOwnProperty(prop)){
            return target[prop]
        }
        else{
            throw "Doesn't Exist";
        }
    }
}

let myProxy = new Proxy(obj,handler);
myProxy.name = "Zakaria";
console.log(myProxy.name );
// myProxy.name = "ali";
console.log(myProxy.name );
myProxy.age = 35;
console.log(myProxy.age);
// myProxy.age = 66;
console.log(myProxy.age);
myProxy.address = "123Street";
console.log(myProxy.address);
// myProxy.address = 55;
console.log(myProxy.address);
console.log(myProxy.job);
