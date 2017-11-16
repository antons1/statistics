const central = require('./central.js');
const util = require('../util.js');

/**
 * Calculates variance of given data
 * @param {Array.<number>} data Array of numbers from sample or population 
 * @param {boolean} [useN=false] If true, data is a population, use n. If false, data is a sample, use n-1. False by default.
 * @return {number} Variance of given data
 */
function variance(data, useN = false) {
    const n = useN ? data.length : data.length - 1;
    const mean = central.mean(data);

    const squaredDifferenceSum = data.reduce((acc, i) => acc += Math.pow(Math.abs(i - mean), 2), 0)
    const variance = (1 / n) * squaredDifferenceSum;
    return util.numberToPrecision(variance, 14);
}

function standardDeviation() {

}

function standardError() {

}

module.exports = {
    variance,
    standardDeviation,
    standardError
}