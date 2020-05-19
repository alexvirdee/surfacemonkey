import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navigation/Navbar';
import Footer from './components/layout/footer/Footer';
import Landing from './components/pages/homepage/Landing';
import About from './components/pages/about/About';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <header>
            <Navbar />
          </header>
          <Switch>
          <main>
          <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
          </main>
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
