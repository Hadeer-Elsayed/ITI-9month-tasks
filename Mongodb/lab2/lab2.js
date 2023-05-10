//a- Display all documents in instructors collection
db.instructors1.find();

//Display all instructors with salaries greater than 4000 (only show 
//firstName and salary)
db.instructors1.find({salary:{$gt:4000}},{_id:0,firstName:1,salary:1});

//c- Display all instructors with ages less than or equal 25.
db.instructors1.find({age:{$lte:25}});

//d- Display all instructors with city mansoura and sreet number 10 or 14
//only display (firstname,address,salary).
db.instructors1.find({"address.city":"mansoura","address.street":{$in:[10,14]}},{_id:0,firstNmae:1,address:1,salary:1});

//e- Display all instructors who have js and jquery in their courses (both of 
//them not one of them)
db.instructors1.find({$and:[{courses:"js"},{courses:"jquery"}]});

//f- Display number of courses for each instructor and display first name 
//with number of courses.
//db.instructors1.find().forEach((ins)=>
//{
//    print(`${ins.firstName},courses,${ins.courses?.length}`)
//});
////////////////////////////////////////////////////////////////ask here

db.instructors1.find({courses:{$exists:true}}).forEach((ins)=>{
    print(`${ins.firstName},courses,${ins.courses.length}`)  
});

//Write mongodb query to get all instructors that have firstName and 
//lastName properties , sort them by firstName ascending then by 
//lastName descending and finally display their data FullName and age
db.instructors1.find({$and:[{firstName:{$exists:true}},{lastName:{$exists:true}}]},
{_id:0,firstName:1,lastName:1,age:1}).sort({firstName:1,lastName:-1});

//another sol
db.instructors1.find({$and:[{firstName:{$exists:true}},{lastName:{$exists:true}}]}).sort({firstName:1,lastName:-1}).forEach((ins)=>
{
    var fullName=`${ins.firstName} ${ins.lastName}`
    print(`FullName : ${fullName},Age: ${ins.age}`)
    
    db.instructors2.insertOne({fullName:fullName,age:ins.age});
});
db.instructors2.find();
db.instructors1.find();
//db.instructors1.updateMany({},{$unset:{fullName:"kjkk"}});
db.instructors1.find({fullName:{$exists:true}});


//BONUS: create new collection with step g values data and name it instructorsData

//h- Find all instructors that have fullName that contains “mohammed”.
db.instructors1.find({$or:[{firstName:"mohammed"},{lastName:"mohammed"}]});

//i- Delete instructor with first name “ebtesam” and has only 5 courses in courses array
db.instructors1.deleteOne({$and:[{firstName:"ebtesam"},{courses:{$size:5}}]});

//j- Add active property to all instructors and set its value to true
db.instructors1.updateMany({},{$set:{active:true}});

//k- Change “EF” course to “jquery” for “mazen mohammed” instructor(without knowing EF Index)
db.instructors1.updateMany({firstName:"mazen",lastName:"mohammed",courses:"EF"},{$set:{"courses.$":"jquery"}});

//- Add jquery course for “noha hesham”
db.instructors1.updateOne({firstName:"noha",lastName:"hesham"},{$push:{courses:"jquery"}});
db.instructors1.updateMany({$and:[{firstName:"noha"},{lastName:"hesham"}]},{$push:{courses:"jquery"}});

//m- Remove courses property for “ahmed mohammed ” instructor
db.instructors1.updateOne({firstName:"ahmed",lastName:"mohammed"},{$unset:{courses:""}});
db.instructors1.find();

//n- Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)
db.instructors1.updateMany({courses:{$size:3}},{$inc:{salary:-500}});

//o- Rename address field for all instructors to fullAddress.
db.instructors1.updateMany({},{$rename:{address:"fullAddress"}});

//p- Change street number for noha hesham to 20
db.instructors1.updateOne({firstName:"noha",lastName:"hesham"},{$set:{"fullAddress.street":20}});


