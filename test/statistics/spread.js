const mocha = require('mocha');
const chai = require('chai');

chai.should();

const spread = require('../../src/statistics/spread.js');

const testArray = [ 916, 871, 249, 430, 416, 634, 530, 429, 419, 315, 20, 887, 455, 844, 9, 305, 48, 681, 623, 121 ];

describe("Spread calculation", () => {
    describe("Should calculate correct variance", () => {
        it("for population", () => {
            const localArray = testArray.slice(0);
            spread.variance(localArray, true).should.equal(79698.39)
        });
        
        it("for sample", () => {
            const localArray = testArray.slice(0);
            spread.variance(localArray).should.equal(83893.042105263)
        });
    });

    describe("Should calculate correct standard deviation", () => {
        it("for population", () => {
            const localArray = testArray.slice(0);
            spread.standardDeviation(localArray, true).should.equal(282.309032799165);
        });

        it("for sample", () => {
            const localArray = testArray.slice(0);
            spread.standardDeviation(localArray).should.equal(289.6429562500407);
        });
    });

    describe("Should calculate correct standard error", () => {
        it("for population", () => {
            const localArray = testArray.slice(0);
            spread.standardError(localArray, true).should.equal(63.12621880011506);
        });
        
        it("for sample", () => {
            const localArray = testArray.slice(0);
            spread.standardError(localArray).should.equal(64.76613393790885);

        });
    });
});