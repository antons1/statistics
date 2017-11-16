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
})