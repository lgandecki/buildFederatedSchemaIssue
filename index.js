const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  directive @entity(
    embedded: Boolean
    additionalFields: [AdditionalEntityFields]
  ) on OBJECT

  input AdditionalEntityFields {
    path: String
    type: String
  }

  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => "Hello world!"
  }
};

if (true) {
  buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ]);
} else {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}
