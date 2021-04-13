import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "/.netlify/functions/lolly_by_id",
    fetch,
  }),
  cache: new InMemoryCache(),
});
