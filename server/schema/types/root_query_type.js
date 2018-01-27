const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString } = graphql;
const UserType = require('./user_type');
const WordType = require('./word_type');
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
    words: {
      type: WordType,
      args: { word: { type: new GraphQLList(GraphQLString)} },
      resolve(parentValue, { word }){
        return axios.get(`https://api.datamuse.com/words?ml=${ word }`)
          .then(res => { return res.data })
          .catch(err => console.log(err));
      }
    }

  }
});

module.exports = RootQueryType;
