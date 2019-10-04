const fse = require('fs-extra');
const fs = require('fs');

/**
 * write json content to a json file
 * used fs-extra for writing the file
 * @param {*} file 
 * @param {*} content 
 */
const writeFile = async (file, content) => fse.outputJsonSync(file, content);

/**
 * write json content to a json file
 * used native fs for writing the file
 * @param {*} file 
 * @param {*} content 
 */
const writeFileFs = (file, content) => {
        return new Promise((resolve, reject)=> {
            fs.writeFile(file, content, (err) => {
                if(err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        }); 
    }


module.exports = { writeFile, writeFileFs };