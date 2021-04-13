require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require("faunadb"),
  q = faunadb.query;
const shortId = require("shortid");

const typeDefs = gql`
  type Query {
    data_by_id(id: ID!): LollyData
  }
  type Mutation {
    sendLolly(
      receiver: String!
      message: String!
      sender: String!
      c1: String!
      c2: String!
      c3: String!
    ): LollyData
  }
  type LollyData {
    receiver: String!
    message: String!
    sender: String!
    c1: String!
    c2: String!
    c3: String!
    url: String!
  }
`;

const resolvers = {
  Query: {
    data_by_id: async (_, args) => {
      const client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });
      const res = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index("lollies_by_url"), args.id)),
          q.Lambda("data", q.Get(q.Var("data")))
        )
      );
      return res.data[0].data;
    },
  },
  Mutation: {
    sendLolly: async (_, args) => {
      const client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });
      const res = await client.query(
        q.Create(q.Collection("lollies"), {
          data: { ...args, url: shortId.generate() },
        })
      );
      return res.data;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = server.createHandler();

module.exports = { handler };
