import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import HomePage from './Components/pages/homePage';
import Products from './Components/pages/products';
import Contact from './Components/pages/contact';


// includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />

          <Route exact path='/' component={HomePage} />
          <Route exact path='/Products' component={Products} />
          <Route exact path='/Contact' component={Contact} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
