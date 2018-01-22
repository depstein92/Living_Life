const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const DoctorType = new GraphQLObjectType({
  name: 'DoctorType',
  fields: {
    id: { type: GraphQLID },
    uid: { type: GraphQLString }
  }
});

module.exports = DoctorType;
