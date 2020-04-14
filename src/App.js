import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import './App.css';

function App() {
  return (
   <Fragment>
     <header>
     <Navbar />
     </header>
     <main>
       <h4>Main Content</h4>
     </main>
     <Footer />
   </Fragment>
  );
}

export default App;
