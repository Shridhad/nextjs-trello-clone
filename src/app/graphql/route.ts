import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import schema from "@gql/schema.graphql";
import { Query } from "@gql/resolver";
import { DateTimeTypeDefinition } from "graphql-scalars";
import { NextRequest } from "next/server";

const typeDefs = [DateTimeTypeDefinition, schema];

const resolvers = {
  Query,
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req, res) => ({ req, res }),
});

export { handler as GET, handler as POST };
