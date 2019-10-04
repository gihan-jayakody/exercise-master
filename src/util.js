const constants = require('./constants');

const {FIZZ, BUZZ, FIZZBUZZ} = constants.word_consts;

/**
 * Get modular value 
 * @param {*} index 
 * @param {*} value 
 */
const modular = (index, value) => index % value === 0;

/**
 * find the value is multiplier of given index
 * @param {*} index 
 * @param {*} first 
 * @param {*} second 
 */
const isMultiplies = (index, first, second) => second ? modular(index, first) && modular(index, second) : modular(index, first);

/**
 * Return constant word based on given value
 * @param {*} i 
 */
const getWord = i => isMultiplies(i, 3, 5) ? FIZZBUZZ : isMultiplies(i, 3) ? FIZZ : isMultiplies(i, 5) ? BUZZ : null;

module.exports = {
    getWord
};