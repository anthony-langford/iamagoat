import React from 'react';
import { Router } from '@reach/router';
import Home from './cumpoenantz/Home';

 const App = () => (
  <Router>
    <Home path='/' />
  </Router>
);

export default App;