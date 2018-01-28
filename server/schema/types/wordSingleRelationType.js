const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const WordsSingleRelationType = new GraphQLObjectType({
  name: 'WordsSingleRelationType',
  fields: () => ({
     wordList: {
      type: GraphQLString,
      args: {
        word: { type: new GraphQLList(GraphQLString) },
        typeOfQuery: { type: GraphQLString }
      },
      resolve(parentValue, { word, typeOfQuery }){
        return axios.get(`https://api.datamuse.com/words?${ typeOfQuery }${ word }`)
          .then(res => {
            let arrayOfWords = res.data.map(obj => { return obj.word });
            return arrayOfWords; })
          .catch(err => console.log(err));
     }
   },
     scoreList: {
      type: GraphQLString,
      args: { word: { type: new GraphQLList(GraphQLString) },
              typeOfQuery: { type: GraphQLString } },
      resolve(parentValue, { word, typeOfQuery }){
        return axios.get(`https://api.datamuse.com/words?${ typeOfQuery }${ word }`)
          .then(res => {
            let arrayOfWords = res.data.map(obj => { return obj.score });
            return arrayOfWords; })
          .catch(err => console.log(err));
     }
   }
  })
});

module.exports = WordsSingleRelationType;
