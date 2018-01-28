const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

/*/words?ml=duck&sp=b**/

const WordsDoubleRelationType = new GraphQLObjectType({
  name: 'WordsDoubleRelationType',
  fields: () => ({
     wordList: {
      type: GraphQLString,
      args: {
       firstWord: { type: new GraphQLList(GraphQLString) },
       secondWord: { type: new GraphQLList(GraphQLString) },
       firstQuery: { type: GraphQLString },
       secondQuery: { type: GraphQLString },
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
