const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const UserType = require('./types/user_type');
const AuthService = require('../services/auth');
const WordType = require('./types/word_type');
const axios = require('axios');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    },
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
    },
    wordsSpelledLike: {
      type: WordType,
      args: { word: { type: GraphQLString } },
      resolve(parentValue, { word }){
        return axios.get(`https://api.datamuse.com/words?sp=${ word }`)
         .then(res => res.data.forEach(obj => { return obj; }))
         .catch(err => console.log(err));
      }
    },
    wordsRhymeWith: {
      type: WordType,
      args: { word: { type: GraphQLString } },
      resolve(parentValue, { word }){
        return axios.get(`https://api.datamuse.com/words?rel_rhy=${ word }`)
         .then(res => res.data.forEach(obj => { return obj; }))
         .catch(err => console.log(err));
      }
    },
    wordsRhymeWithRelatedToo: {
      type: WordType,
      args: {
        firstWord: { type: GraphQLString },
        secWord: { type: GraphQLString }
      },
      resolve(parentValue, { firstWord, secondWord }){
        axios.get(`https://api.datamuse.com/words?ml=${firstWord}&rel_rhy=${secWord}`)
          .then(res => res.data.forEach(obj => { return obj;}))
          .catch(err => console.log(err));
      }
    },
    wordAdjDescribe:{
      type: WordType,
      args: { word: { type: GraphQLString } },
      resolve(parentValue, { word }){
        return axios.get(`https://api.datamuse.com/words?rel_jjb=${ word }`)
         .then(res => res.data.forEach(obj => { return obj; }))
         .catch(err => console.log(err));
      }
    },
    wordNounDescribeAdj:{
      type: WordType,
      args: { word: { type: GraphQLString } },
      resolve(parentValue, { word }){
        return axios.get(`https://api.datamuse.com/words?rel_jja=${ word }`)
         .then(res => res.data.forEach(obj => { return obj; }))
         .catch(err => console.log(err));
      }
    },
    wordStrongRel:{
      type: WordType,
      args: { word: { type: GraphQLString } },
      resolve(parentValue, { word }){
        return axios.get(`https://api.datamuse.com/words?/rel_trg=${ word }`)
         .then(res => res.data.forEach(obj => { return obj; }))
         .catch(err => console.log(err));
      }
    },
    suggestedWords:{
      type: WordType,
      args: { word: { type: GraphQLString } },
      resolve(parentValue, { word }){
        return axios.get(`https://api.datamuse.com/sug?s=${ word }`)
         .then(res => res.data.forEach(obj => { return obj; }))
         .catch(err => console.log(err));
      }
    },

  }
});

module.exports = mutation;
