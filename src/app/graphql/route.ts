import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import schema from "@/src/graphql/schema.graphql";
import { Query } from "@/src/graphql/resolver";
import { DateTimeResolver, DateTimeTypeDefinition } from "graphql-scalars";
import { allowCors } from "@/src/utils/cors";
import { NextRequest } from "next/server";

const typeDefs = [DateTimeTypeDefinition, schema];

const resolvers = {
  Query,
};

const apolloServer = new ApolloServer({
  // schema: makeExecutableSchema({
  //   typeDefs: [DateTimeTypeDefinition],
  //   resolvers: {
  //     DateTimeResolver,
  //     Query,
  //   },
  // }),
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req, res) => ({ req, res }),
});

export { handler as GET, handler as POST };
// export default allowCors(handler);
