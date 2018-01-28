const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString } = graphql;
const UserType = require('./user_type');
const WordsSingleRelationType = require('./wordSingleRelationType');
const WordsDoubleRelationType = require('./wordsDoubleRelationType');
const axios = require('axios');


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    wordsWithSingleRelation: {
      type: WordsSingleRelationType,
      args: {
            word: { type: GraphQLString },
            typeOfQuery: { type: GraphQLString }
      },
      resolve(parentValue, { word, typeOfQuery }){
        return axios.get(`https://api.datamuse.com/words?${ typeOfQuery }${ word }`)
          .then(res => { return res.data })
          .catch(err => console.log(err));
      }
    },
    wordsWithDoubleRelation:{
      type: WordsDoubleRelationType,
      args: {
       firstWord: { type: GraphQLString },
       secondWord: { type: GraphQLString },
       firstQuery: { type: GraphQLString },
       secondQuery: { type: GraphQLString },
      },
      resolve(parentValue, { firstWord, secondWord, firstQuery, secondQuery }){
        return axios.get(`https://api.datamuse.com/words?${ firstQuery }=${ firstWord }&${secondQuery}=${secondWord}`)
          .then(res => { return res.data })
          .catch(err => console.log(err));
     }
    }
  }
});

module.exports = RootQueryType;
