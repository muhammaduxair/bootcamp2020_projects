require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require("faunadb"),
  q = faunadb.query;

const typeDefs = gql`
  type Query {
    allData: [Data!]
  }
  type Mutation {
    addData(data: String!): Data
    updateDataByID(id: ID!, data: String!): Data
    deleteByID(id: ID!): Data
  }
  type Data {
    ref: String!
    data: Message
  }
  type Message {
    data: String!
  }
`;

const resolvers = {
  Query: {
    allData: async () => {
      var client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });

      let allDocuments = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("crud"))),
          q.Lambda("X", q.Get(q.Var("X")))
        )
      );

      return allDocuments.data.map((obj) => ({
        ref: JSON.stringify(obj.ref),
        data: { data: obj.data.data },
      }));
    },
  },
  Mutation: {
    addData: async (_, args) => {
      var client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });
      var res = await client.query(
        q.Create(q.Collection("crud"), {
          data: { data: args.data },
        })
      );
      return {
        ref: JSON.stringify(res.ref),
        data: { data: res.data.data },
      };
    },
    updateDataByID: async (_, args) => {
      var client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });
      var res = await client.query(
        q.Update(q.Ref(q.Collection("crud"), args.id), {
          data: { data: args.data },
        })
      );
      return {
        ref: JSON.stringify(res.ref),
        data: { data: res.data.data },
      };
    },
    deleteByID: async (_, args) => {
      var client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });
      var res = await client.query(
        q.Delete(q.Ref(q.Collection("crud"), args.id))
      );
      return {
        ref: JSON.stringify(res.ref),
        data: { data: res.data.data },
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = server.createHandler();

module.exports = { handler };
