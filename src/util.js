/**
 * Changes precision of a number
 * @param {number} number
 * @param {number} precision number of decimals between 0 and 21
 * @return {number} 
 */
function numberToPrecision(number, precision) {
    return parseFloat(number.toPrecision(precision));
}

module.exports = {
    numberToPrecision
}