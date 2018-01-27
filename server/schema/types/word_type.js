const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const WordType = new GraphQLObjectType({
  name: 'WordType',
  fields: () => ({
     word: {
      type: GraphQLString,
      args: { word: { type: new GraphQLList(GraphQLString) } },
      resolve(parentValue, { word }){
        return axios.get(`https://api.datamuse.com/words?ml=${ word }`)
          .then(res => {
            let arrayOfWords = res.data.map(obj => { return obj.word });
            return arrayOfWords; })
          .catch(err => console.log(err));
     }
   }
  })
});

module.exports = WordType;
