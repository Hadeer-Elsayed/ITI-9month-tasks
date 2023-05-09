const Jasmine = require("jasmine");
const { MathUtils, obj, sayHelloWorld } = require("../index");

describe("test MathUtils functions ",()=>{
    var math1;
    beforeEach(() => {
            math1 = new MathUtils();
     });
     //***********substract*************/
     it("test MathUtils substract",()=>{
        expect(math1.substract(5,3)).toEqual(2);
  
     });
     it("test return and of MathUtils substract",()=>{
        expect(math1.substract("l","l")).toEqual(jasmine.any(Number));
     });
      it("test num of parameters of MathUtils substract",()=>{
        // expect(math1.substract(5,6,7,8)).toEqual(jasmine.any(Number));
     });

     //*************multiply*************/
     it("test Mathutils multiply",()=>{
        expect(math1.multiply(5,3)).toEqual(15);
     });
     it("test return of MathUtils Multiply",()=>{
        expect(math1.multiply(1,"k")).toBeNaN();
     });
     it("test num of parameters of MathUtils Multiply",()=>{//////////////////////
        // expect(math1.multiply(1,5,7,8)).toEqual(5);
     });

     //*************divide*************/
     it("test Mathutils divide",()=>{
        expect(math1.divide(6,3)).toEqual(2);
     });
     it("test return of MathUtils Multiply",()=>{
        expect(math1.divide(1,"k")).toBeNaN();
     });
     it("test num of parameters of MathUtils Multiply",()=>{
        // expect(math1.divide(1,5,7,8)).toEqual(5);
     });

    //*************average*************/
     it("test Mathutils average",()=>{
        expect(math1.average(6,6)).toEqual(6);
     });
     it("test return of MathUtils average",()=>{
        expect(math1.average(1,"k")).toBeNaN();
     });
     it("test num of parameters of MathUtils average",()=>{
        // expect(math1.average(1,5,7,8)).toEqual(5);
     });


     //*************factorial*************/
     it("test Mathutils factorial",()=>{
        expect(math1.factorial(2)).toEqual(2);
     });
     it("test Mathutils factorial",()=>{
        expect(math1.factorial(0)).toEqual(1);
     });
     it("test Mathutils factorial",()=>{
        // expect(math1.factorial(-5)).toEqual(2);
     });

    //*************checkPositivity*************//
     it("test MathUtils checkPositivity",()=>{
        expect(math1.checkPositivity(5)).toEqual(true);
     });
     it("test MathUtils checkPositivity",()=>{
        expect(math1.checkPositivity(-3)).toEqual(false);
     });
      it("test num of parameters of MathUtils substract",()=>{
        //  expect(math1.checkPositivity(5,6)).toEqual(true);
     });



     














})

// describe("test MathUtils function", () => {
//   var math1;
//   beforeEach(() => {
//     math1 = new MathUtils();
//   });
//   it("test MathUtils sum", () => {
//     expect(math1.sum(2, 5)).toEqual(7);
//     expect(math1.sum(2, 5)).toBe(7);
//     expect(math1.sum(2, 5)).toEqual(jasmine.any(Number));
//   });
// });

// describe("study diff btn toEqual and toBe", () => {
//   var user = { id: 1 };
//   var a = { x: user };
//   var b = { x: user };
//   it("", () => {
//     expect(a).toEqual(b);
//     //  expect(a).toBe(b)  //? test value with ref
//   });
// });

// describe("study spyOn", () => {
//   it("", () => {
//     spyOn(obj, "hello");
//     sayHelloWorld(obj);
//     expect(obj.hello).toHaveBeenCalled();
//     expect(obj.hello).toHaveBeenCalledTimes(1);
//     expect(obj.hello).toHaveBeenCalledWith(3);
//     expect(obj.hello).toHaveBeenCalledOnceWith(3);
//   });
// });

// describe("create custom matcher", () => {
//   beforeEach(() => {
//     jasmine.addMatchers({
//       toBeLarge: function () {
//         return {
//           compare: function (actual) {
//             let result = {};
//             result.pass = actual > 5000;
//             result.message = "num must be > 5000";
//             return result;
//           },
//         };
//       },
//     });
//   });
//   it("", () => {
//     expect(60000).toBeLarge();
//   });
// });

// describe("delay in jasmine ", () => {
//   beforeAll(() => {
//     jasmine.clock().install();
//   });
//   afterAll(() => {
//     jasmine.clock().uninstall();
//   });
//   it("", () => {
//     var x = 5;
//     setTimeout(() => {
//       x = 10;
//     }, 3000);
//     jasmine.clock().tick(6000);
//     expect(x).toEqual(10);
//   });
// });
