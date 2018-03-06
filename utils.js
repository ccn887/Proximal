var fs = require('fs')
var Promise = require('bluebird');
var utils = {}
var axios = require('axios')



  const readFile = (path) => {
    return new Promise((resolve, reject) => {
      axios.get(path)
      .then( data => {
        return resolve(data)})
       .catch(err => reject(err))
      });
  }

const writeFile = (path, data)=>  {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}



module.exports = {readFile, writeFile}
