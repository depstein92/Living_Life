const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

/*/words that start with t, end in k, and have two letters in between*/

const WordsStartWithEndWithType = new GraphQLObjectType({
  name: 'WordsStartWithEndWithType',
  fields: () => ({
     wordList: {
      type: GraphQLString,
      args: {
       firstWord: { type: new GraphQLList(GraphQLString) },
       secondWord: { type: new GraphQLList(GraphQLString) },
      },
      resolve(parentValue, { firstWord, secondWord, firstQuery, secondQuery }){
        return axios.get(`https://api.datamuse.com/words?${ firstQuery }=${ firstWord }&${ secondQuery }=${ secondWord }`)
          .then(res => {
            let arrayOfWords = res.data.map(obj => { return obj.word });
            return arrayOfWords; })
          .catch(err => console.log(err));
     }
   },
    scoreList: {
      type: GraphQLString,
      args: {
       firstWord: { type: new GraphQLList(GraphQLString) },
       secondWord: { type: new GraphQLList(GraphQLString) },
       firstQuery: { type: GraphQLString },
       secondQuery: { type: GraphQLString },
      },
      resolve(parentValue, { firstWord, secondWord, firstQuery, secondQuery }){
        return axios.get(`https://api.datamuse.com/words?${ firstQuery }=${ firstWord }&${secondQuery}=${secondWord}`)
          .then(res => {
            let arrayOfWords = res.data.map(obj => { return obj.score });
            return arrayOfWords; })
          .catch(err => console.log(err));
      }
    }

  })

});

module.exports = WordsDoubleRelationType;
