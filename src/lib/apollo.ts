import { ApolloClient, InMemoryCache } from "@apollo/client";
const API_URL=process.env.REACT_APP_CONTENT_API;
export const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache()
})
