import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: `${process.env.PUBLIC_URL}/graphql`
});

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
});