import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CheckIn from './CheckIn';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={CheckIn} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  );
}

{
  /* <Container maxWidth="md">
<CheckIn />
</Container> */
}
