import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Main from './Main';
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Products from './Components/pages/products';
import Contact from './Components/pages/contact';
import Dashboard from './Components/pages/dashboard';
import { getQueryParams } from './utils';




// includes
import './Assets/css/default.min.css';

class App extends Component {
  constructor(){
    super();
    const params = getQueryParams();
    this.state = { token: params.token }
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <Router>
        <div className="App">


          {this.isLoggedIn ? <Header token={this.state.token}/> : <Header />}

          <Route exact path='/' component={Main} />
          <Route exact path='/Products' component={Products} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Dashboard' component={Dashboard} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
