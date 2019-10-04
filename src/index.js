const asyncWorker = require('./word_async');
const syncWorker = require('./word_sync');

console.log('It works!');

/**
 * Start synchronous function
 */
syncWorker.start();

/**
 * Start asynchronous function
 */
asyncWorker.start();




