const{capitalizeText, createArray}=require("../index")
const { assert, expect } = require("chai");
const { describe } = require("mocha");
const should = require("chai").should();

describe("test capitalizeText",()=>{
    it("return string with assert",()=>{
        assert.isString(capitalizeText("hadeer"));
        
        expect(capitalizeText("hadeer"))
        .to.be.an("string")

        capitalizeText("hadeer")
        .should.to.be.an("string")
    })
    it("test that it take string and return it capitalizes",()=>{
        assert.equal(capitalizeText("hadeer"),"HADEER");

        expect(capitalizeText("hadeer"))
        .to.equal("HADEER");

        capitalizeText("hadeer")
        .should.equal("HADEER")

    })

    it("throw error if the function takes number",()=>{

        assert.throw(()=>capitalizeText(5),TypeError,"parameter should be string");
        expect(()=>capitalizeText(5)).throw(TypeError,"parameter should be string");
        (()=>capitalizeText(5)).should.Throw(TypeError,"parameter should be string")
    })

})
/////////////////////////////////////////////////////task2/////////////////////////////////////////////////
describe("test createArray",()=>{
    it("return value of type array",()=>{
        assert.isArray(createArray(1));

        expect(createArray(1,2,3))
        .to.be.an("array")

        createArray(1,2,3)
        .should.to.be.an("array")
    })
    it("pass 3 it will return array of length 3 and test it's include 1",()=>{
        assert.lengthOf(createArray(3),3);
        assert.include(createArray(3),1);

        expect(createArray(3))
        .to.have.lengthOf(3)
        .that.includes(1)

        createArray(3)
        .should.to.have.lengthOf(3)
        .to.include(1)

    })
    setTimeout(() => {
        run()
    }, 5000);
})





