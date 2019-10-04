const fileWrite = require('./file_write');
const util = require('./util');
const { getRandomWordSync } = require('word-maker');

const max = 100;

/**
 * get the word based on given value
 * used synchronous function for getting the word
 * @param {*} i 
 */
const getWordSync = (i) => {
    const syncWord = util.getWord(i);
    return syncWord ? syncWord : getRandomWordSync({ withErrors: true });
}

/**
 * Start synchronous function for printing the word in console.
 * Also writing the content in a file as a json
 * used native fs for wring the file
 */
const start = () => {
    const data = {};
    for (let i = 0; i <= max; i++) {
        let word = {};
        try {
            word = getWordSync(i);
        } catch (err) {
            word = `It shouldn't break anything!`;
        }
        data[i] = word;
        console.log(`${i}: ${word}`);
    }

    fileWrite.writeFileFs('./data_sync.json', JSON.stringify(data)).then(() => {
        console.log('success on writing file')
    })
    .catch(error => {
        console.log('error on writing file')
    });
};

module.exports = { start };