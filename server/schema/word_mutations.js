const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat
} = graphql;

const WordType = require('./types/word_type');

const wordMutation = new GraphQLObjectType({
  name: 'WordMutation',
  fields: {
    getSimiliarWord: {
      type: WordType,
      args: {
        word: { type: GraphQLString}
      },
      resolve(parentValue, { word }) {
        return axios.get(`https://api.datamuse.com/words?ml=${ word }`)
          .then(res => { res.data.forEach(obj => { return obj; }) })
          .catch(err => console.log(err));
      }
    },
    wordsRelatedToStartsWith: {
      type: WordType,
      args: {
        word: { type: GraphQLString },
        startsWith: { type: GraphQLString }
      },
      resolve(parentValue, { word, startsWith }){
        return axios.get(`https://api.datamuse.com/words?ml=${word}&sp=${startsWith}*`)
          .then(res => res.data.forEach(obj => { return obj; }))
          .catch(err => console.log(err));
      }
    },
    wordsSoundLike: {
      type: WordType,
      args: { word: { type: GraphQLString } },
      resolve(parentValue, { word }){
        return axios.get(`https://api.datamuse.com/words?sl=${ word }`)
         .then(res => res.data.forEach(obj => { return obj; }))
         .catch(err => console.log(err));
      }

    },
    wordsRelatedToEndingWith: {
      type: WordType,
      args: {
        word: { type: GraphQLString },
        endsWith: { type: GraphQLString }
      },
      resolve(parentValue, { word, endsObj}){
        axios.get(`https://api.datamuse.com/words?ml=${ word }&sp=*${withObj}`)
          .then(res => res.data.forEach(obj => { return obj;}))
          .catch(err => console.log(err));
      }
    },
    wordsNumInBetw: {
      type: WordType,
      args: {
        letterOne: { type: GraphQLString },
        letterTwo: { type: GraphQLString}
      },
      resolve(parentValue, { letterOne, letterTwo }){
        let randNum = Math.floor(Math.random() * Math.floor(5));
        let question = '?'.repeat(randNum);
        axios.get(`https://api.datamuse.com/words?sp=${ letterOne }${ question }${ letterTwo }`)
          .then(res => res.data.forEach(obj => { return obj; }))
          .catch(err => console.log(err));
      }
    }
  }
})
