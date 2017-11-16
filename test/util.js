const mocha = require('mocha');
const chai = require('chai');

chai.should();

const util = require('../src/util.js');

describe("Util functions", () => {
    it("Should correctly change number precision", () => {
        const num1 = 12.5432345;
        const num2 = 12;

        util.numberToPrecision(num1, 2).should.equal(12.54);
        util.numberToPrecision(num2, 3).should.equal(12);
    });
});