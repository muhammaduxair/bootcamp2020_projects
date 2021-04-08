require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require("faunadb"),
  q = faunadb.query;

const typeDefs = gql`
  type Query {
    allTodo: [Todo!]
  }
  type Mutation {
    addTodo(message: String!): Todo
    updateStatusByID(id: ID!, status: Boolean!): Todo
    updateMessageByID(id: ID!, message: String!): Todo
    deleteByID(id: ID!): Todo
  }
  type Todo {
    ref: String!
    data: Message
  }
  type Message {
    message: String!
    status: Boolean!
  }
`;

const resolvers = {
  Query: {
    allTodo: async () => {
      var client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });
      let allDocuments = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("todo"))),
          q.Lambda("X", q.Get(q.Var("X")))
        )
      );
      return allDocuments.data.map((obj) => ({
        ref: JSON.stringify(obj.ref),
        data: { message: obj.data.message, status: obj.data.status },
      }));
    },
  },
  Mutation: {
    addTodo: async (_, args) => {
      var client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });
      var res = await client.query(
        q.Create(q.Collection("todo"), {
          data: { message: args.message, status: true },
        })
      );
      return {
        ref: JSON.stringify(res.ref),
        data: { message: res.data.message, status: res.data.status },
      };
    },
    updateStatusByID: async (_, args) => {
      var client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });
      var res = await client.query(
        q.Update(q.Ref(q.Collection("todo"), args.id), {
          data: { status: args.status },
        })
      );
      return {
        ref: JSON.stringify(res.ref),
        data: { message: res.data.message, status: res.data.status },
      };
    },
    updateMessageByID: async (_, args) => {
      var client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });
      var res = await client.query(
        q.Update(q.Ref(q.Collection("todo"), args.id), {
          data: { message: args.message },
        })
      );
      return {
        ref: JSON.stringify(res.ref),
        data: { message: res.data.message, status: res.data.status },
      };
    },
    deleteByID: async (_, args) => {
      var client = new faunadb.Client({
        secret: process.env.FAUNADB_ADMIN_SECRET,
      });
      var res = await client.query(
        q.Delete(q.Ref(q.Collection("todo"), args.id))
      );
      return {
        ref: JSON.stringify(res.ref),
        data: { message: res.data.message, status: res.data.status },
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
