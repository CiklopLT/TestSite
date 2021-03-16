import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import 'typeface-roboto'
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;