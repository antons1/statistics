const mocha = require('mocha');
const chai = require('chai');

chai.should();

const index = require("../src/index.js");

describe("Index exports", () => {
    it("should contain central tendency function", () => {
        index.central.should.be.an('Object');
        index.central.mean.should.be.a('function')
        index.central.mode.should.be.a('function')
        index.central.median.should.be.a('function')
    })
})