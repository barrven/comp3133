var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator test", ()=>{
    describe("Test add function", ()=>{
        it("5+2=7", ()=>{
            let n1 = calculator.add(5, 2)
            expect(n1).to.equal(7)
        })
        //fails
        it("5+2=8", ()=>{
            expect(calculator.add(5,2)).to.equal(8)
        })
    })

    describe("Test subtract function", () => {
        it("5-2=3", () => {
            expect(calculator.sub(5, 2)).to.equal(3)
        })
        //fails
        it("5-2=5", () => {
            expect(calculator.sub(5, 2)).to.equal(5)
        })
    })

    describe("Test multiply function", () => {
        it("5*2=10", () => {
            expect(calculator.mul(5, 2)).to.equal(10)
        })
        //fails
        it("5*2=12", () => {
            expect(calculator.sub(5, 2)).to.equal(12)
        })
    })

    describe("Test divide function", () => {
        it("10/2=5", () => {
            expect(calculator.div(10, 2)).to.equal(5)
        })
        //fails
        it("10/2=2", () => {
            expect(calculator.div(10, 2)).to.equal(2)
        })
    })
})