const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./types/root_query_type');
const user_mutations = require('./user_mutations');
const word_mutations = require('./word_mutations');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  
});
