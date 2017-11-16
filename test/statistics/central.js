const mocha = require('mocha');
const chai = require('chai');

chai.should();

const testArray = [ 916, 871, 249, 430, 416, 634, 530, 429, 419, 315, 20, 887, 455, 844, 9, 305, 48, 681, 623, 121 ];

const central = require('../../src/statistics/central.js');

describe('Central tendency calculations', () => {
    it('Should calculate correct mean value', () => {
        const localArray = testArray.slice(0);
        central.mean(localArray).should.equal(460.1);
    });
    
    describe('Should calculate correct median value', () => {
        it('With even number of data points', () => {
            const localArray = testArray.slice(0);
            central.median(localArray).should.equal(429.5);
        });
        
        it('With odd number of data points', () => {
            const localArray = testArray.slice(0);
            localArray.pop(); 
            central.median(localArray).should.equal(429);
        });
        
        it('With sorted array', () => {
            const localArray = testArray.slice(0);
            localArray.sort((a, b) => a - b);
            central.median(localArray).should.equal(429.5);
        });
        
        it('With unsorted array', () => {
            const localArray = testArray.slice(0);
            central.median(localArray).should.equal(429.5);
        });
    });
    
    xit('Should calculate correct mode', () => {
        const localArray = testArray.slice(0);
        
    });
});