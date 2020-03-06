
import React from 'react';
import AppNavigator from "./src/navigation/navigation";
import { ApolloProvider } from '@apollo/react-hooks';
import { AsyncStorage } from "react-native";

import { InMemoryCache, HttpLink,} from 'apollo-boost';
import { ApolloLink, concat } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { setContext } from "apollo-link-context";

const httpLink = new HttpLink({ uri: 'http://localhost:8000' });
const authLink = setContext(async (_:any, { Headers:{} }) => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      ...Headers,
      Authorization: token ? `JWT ${token}` : "",
    },
  };
});
const httpAuthLink = authLink.concat(httpLink);

const client = new ApolloClient({
  link : httpAuthLink,
  cache : new InMemoryCache()
});

const App = () => {
  console.disableYellowBox = true
  return (
    <ApolloProvider client={client}>
      <AppNavigator/>
    </ApolloProvider>
  );
};

export default App;