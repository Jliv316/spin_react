import React, { Component } from 'react';
import Home from './Components/homeComponent/home';
import Dashboard from './Components/pages/dashboard';
import { getQueryParams } from './utils';

class Main extends Component {
  constructor() {
    super();
    const params = getQueryParams();
    this.state = { token: params.token }
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    let page = this.props.token ? <Dashboard /> : <Home />; 
    return (
        <div>{page}</div>
    );
  }
}

export default Main;
