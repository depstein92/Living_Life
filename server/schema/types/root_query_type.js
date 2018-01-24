const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');
const WordType = require('./word_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
      word: {
        type: WordType,
        resolve(parentValue, args, req){
          return req.word;
        }
      }
    }
});

module.exports = RootQueryType;
