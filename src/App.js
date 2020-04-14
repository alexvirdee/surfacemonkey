import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import About from './components/pages/About';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <header>
          <Navbar />
        </header>
        <Route exact path="/" component={Landing} />
        <Switch>
        <main>
          <Route exact path="/about" component={About} />
        </main>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
