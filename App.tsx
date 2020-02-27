
import React from 'react';
import AppNavigator from "./src/navigation/navigation";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  uri : 'http://localhost:8000/graphql/',
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