const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const UserType = require('./types/user_type');
const AuthService = require('../services/auth');
const axios = require('axios');
const WordsSingleRelationType = require('./types/wordSingleRelationType');

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
    getWordsWithSingleRel: {
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
  }
});

module.exports = mutation;
