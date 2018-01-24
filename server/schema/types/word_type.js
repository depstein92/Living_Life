const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = graphql;

const WordType = new GraphQLObjectType({
  name: 'WordType',
  fields: {
    word: { type: GraphQLString },
    score: { type: GraphQLInt }
  }
});

module.exports = WordType;
