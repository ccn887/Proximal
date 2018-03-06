const utils = require('./utils')
// var Promise = require('bluebird');


const labels = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100', '1200', '1300']

const unique = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

const tokenize = text =>{
  let uniqueme = text.toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, ' ').trim().split(' ')
  return unique(uniqueme)
}

const wordForLabelRead = (obj, word, label) => {
      let wordCountLabel = obj
      if (!wordCountLabel.hasOwnProperty(word)) {
        wordCountLabel[word] = {}
        wordCountLabel[word][label] = 1

      }
      if (!wordCountLabel[word].hasOwnProperty(label)) {
        wordCountLabel[word][label] = 1
        console.log('second condition', word)
      }
      else {
        var wordCountInLabel = wordCountLabel[word][label]
        console.log('last condition', wordCountInLabel)
        wordCountInLabel++
        console.log('last condition', wordCountInLabel)
        wordCountLabel[word][label] = wordCountInLabel.toString()
      }
     return wordCountLabel
    }



const docsForLabel = (label) => {
  utils.readFile('docsForLabel.json')
    .then(data => {
      let docCountObj = JSON.parse(data)
      let count = docCountObj[label]
      count++
      docCountObj[label] = count
      let newDocObj = JSON.stringify(docCountObj)
      return newDocObj
    })
    .then(newDocObj => {
      utils.writeFile('docsForLabel.json', newDocObj)
    })
    .catch(err => console.log(err))
}

const train = async (text, label) => {
  const words = tokenize(text)
  docsForLabel(label)
  //doccount
  try{
  let wordObj = await utils.readFile('giantWordList.txt')
  let parsedObj = JSON.parse(wordObj)
for(let i = 0; i< words.length; i++){
    wordForLabelRead(parsedObj, words[i], label) }
 await utils.writeFile('giantWordList.txt', JSON.stringify(parsedObj))

}
catch(err){
  console.log(err)
}
}



module.exports = {train, tokenize}
