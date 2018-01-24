
const axios = require('axios');


/*============WORDS WITH SIMILIAR MEANING=============
====================================================*/

module.exports.getSimiliarWord = (word) => {
   axios.get(`https://api.datamuse.com/words?ml=${ word }`)
     .then(res => {
       res.data.forEach(obj => {
        return obj.word;
       })
    })
     .catch(err => console.log(err));
};

module.exports.getSimiliarScoreApi = (word) => {
   axios.get(`https://api.datamuse.com/words?ml=${ word }`)
     .then(res => {
       res.data.forEach(obj => {
        return obj.score;
       })
    })
     .catch(err => console.log(err));
};

/*============WORDS RELATED TO STARTING WITH=============
====================================================*/


 module.exports.wordsRelatedToStartsWith = (word, startsWith) => {
   axios.get(`https://api.datamuse.com/words?ml=${word}&sp=${startsWith}*`)
    .then(res => res.data.forEach(obj => { return obj; }))
    .catch(err => console.log(err));
};

 module.exports.wordsRelatedToStartsWithScore = (word, startsWith) => {
   axios.get(`https://api.datamuse.com/words?ml=${word}&sp=${startsWith}*`)
     .then(res => res.data.forEach(obj => { return obj.score; }))
     .catch(err => console.log(err));
};


/*============WORDS RELATED TO ENDING WITH=============
====================================================*/


module.exports.wordsRelatedToEndingWith = (word, endsObj) => {
  axios.get(`https://api.datamuse.com/words?ml=${ word }&sp=*${withObj}`)
    .then(res => res.data.forEach(obj => { return obj.word }))
    .catch(err => console.log(err));
};
module.exports.wordsRelatedToEndingWithScore = (word, endsObj) => {
  axios.get(`https://api.datamuse.com/words?ml=${ word }&sp=*${ withObj }`)
    .then(res => res.data.forEach(obj => {  return obj.score }))
    .catch(err => console.log(err));
};


/*============WORDS THAT SOUND LIKE=============
====================================================*/

module.exports.wordsSoundLike = ( word ) => {
  axios.get(`https://api.datamuse.com/words?sl=${ word }`)
   .then(res => res.data.forEach(obj => { return obj.word }))
   .catch(err => console.log(err));
};

module.exports.wordsSoundLikeScore = ( word ) => {
  axios.get(`https://api.datamuse.com/words?sl=${ word }`)
   .then(res => res.data.forEach(obj => {  return obj.score }))
   .catch(err => console.log(err));
};

/*==WORDS THAT START WITH X END IN Y AND HAVE Z LETTERS IN BETWEEN====
=======================================================================*/

module.exports.wordsNumInBetw = (letterOne, letterTwo) => {
  let randNum = Math.floor(Math.random() * Math.floor(5));
  let question = '?'.repeat(randNum);
  axios.get(`https://api.datamuse.com/words?sp=${ letterOne }${ question }${ letterTwo }`)
    .then(res => res.data.forEach(obj => { return obj.word }))
    .catch(err => console.log(err));
}
