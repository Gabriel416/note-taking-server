const { ApolloServer } = require('apollo-server');
const { resolvers, typeDefs } = require('./schema');

const server = new ApolloServer({ resolvers, typeDefs });
server.listen({ port: process.env.PORT || 4000 }, () => {
    console.log('listening on post 4000')
});