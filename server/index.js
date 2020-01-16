const {ApolloServer} = require('apollo-server');

const typeDefs = `
    type Query{
        "Count of total days skied druing a season"
        totalDays: Int
    }
    type Mutation {
        addDay: Int
        removeDay: Int
    }
`

let skiDays = 0;

const resolvers = {
    Query: {
        totalDays: () => skiDays
    },
    Mutation: {
        addDay: () => ++skiDays,
        removeDay: () => --skiDays
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=> `Graph server listening on ${url}`).then(console.log).catch(console.error);