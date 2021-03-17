import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, gql, useQuery, useMutation, ApolloProvider } from '@apollo/client';
import 'typeface-roboto'
import Home from './Home';

const client = new ApolloClient({
  uri: ' http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;