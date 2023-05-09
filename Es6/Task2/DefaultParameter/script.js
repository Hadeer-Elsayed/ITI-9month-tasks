function displayCourse(object) {
    let defObj = {
        courseName: "ES6",
        courseDuration: "3days",
        courseOwner: "JavaScript"
    }
    let obj = Object.assign({}, defObj, object);
    let props = Object.keys(obj).length;
    try {
        if(props > 3) {
            throw new Error("Invalid Input");
        }
        return `This is ${obj.courseName} and it will be ${obj.courseDuration} and its owner is ${obj.courseOwner}`
    }
    catch(err) {
        console.error(err.message)
    }
}
console.log(displayCourse());
console.log(displayCourse({courseName: "Englih", courseDuration: "2days", courseOwner: "Nourhan"}));
console.log(displayCourse({courseName: "Englih", courseDuration: "2days", courseOwner: "Nourhan", coursePrice: 100}));