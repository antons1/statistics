const mocha = require('mocha');
const chai = require('chai');

chai.should();

const index = require("../src/index.js");

describe("Index exports", () => {
    describe("should contain central tendency functions", () => {
        it("module", () => index.central.should.be.an('Object'));
        it("mean", () => index.central.mean.should.be.a('function'));
        it("mode", () => index.central.mode.should.be.a('function'));
        it("median", () => index.central.median.should.be.a('function'));
    })
    describe("should contain spread functions", () => {
        it("module", () => index.spread.should.be.an('Object'));
        it("variance", () => index.spread.variance.should.be.a('function'));
        it("standardDeviation", () => index.spread.standardDeviation.should.be.a('function'));
        it("standardError", () => index.spread.standardError.should.be.a('function'));
    });
});