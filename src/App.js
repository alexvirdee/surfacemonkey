import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <header>
          <Navbar />
        </header>
        <Switch>
        <main>
          <h4>Main Content</h4>
        </main>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
