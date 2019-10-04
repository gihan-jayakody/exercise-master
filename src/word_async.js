const fileWrite = require('./file_write');
const util = require('./util');
const { getRandomWord } = require('word-maker');

const max = 100;

/**
 * get the word based on given value
 * @param {*} i 
 */
const getWordAsync = async (i) => {
    const asyncWord = util.getWord(i);
    return asyncWord ? asyncWord : await getRandomWord({ withErrors: true, slow: true });
}

/**
 * Start async function for printing the word in console.
 * Also writing the content in a file as a json
 */
const start = async () => {
    const data = {};
    for (let i = 0; i <= max; i++) {
        let word = {};
        try {
            word = await getWordAsync(i);
        } catch (err) {
            word = `It shouldn't break anything!`;
        }
        data[i] = word;
        console.log(`${i}: ${word}`);
        
    }
    await fileWrite.writeFile('./data_async.json', data);

};

module.exports = { start };