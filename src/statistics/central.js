/**
 * Calculates the mean of given sample
 * @param {Array.<number>} sample Array of numbers
 * @return {number} The sample mean
 */
function mean(sample) {
    return sample.reduce((acc, i) => acc += i, 0)/sample.length;
}

/**
 * Calculates the mode of given sample
 * @param {Array.<number>} sample Array of numbers
 * @return {number} The sample mode
 */
function mode(sample) {
    let currentMode = 0;
    let currentMultiple = -1;
    const modeMap = {};

    sample.forEach((i) => {
        const iStr = i.toString();
        if(typeof modeMap[iStr] === 'undefined') modeMap[iStr] = 0;
        modeMap[iStr]++;

        if(modeMap[iStr] > currentMultiple || currentMultiple === -1) {
            currentMode = i;
            currentMultiple = modeMap[iStr];
        }
    });

    return currentMode;
}

/**
 * Calculates the median of given sample
 * @param {Array.<number>} sample Array of numbers
 * @param {boolean} [sorted=false] Whether sample is presorted
 * @return {number} 
 */
function median(sample, sorted = false) {
    const orderedSample = sorted ? sample : sample.sort((a, b) => a - b);
    const medianPosition = orderedSample.length / 2;

    if(medianPosition % 1 === 0) {
        const lowerPosition = medianPosition - 1;
        const upperPosition = medianPosition;
        return mean([orderedSample[lowerPosition], orderedSample[upperPosition]]);
    } else return orderedSample[Math.floor(medianPosition) - 1];
}

module.exports = {
    mean,
    mode,
    median
}