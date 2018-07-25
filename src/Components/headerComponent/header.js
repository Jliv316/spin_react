import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <header>

        <div className = 'logo'>
          LOGO
        </div>

        <nav>
          <ul>
            <li className="first">
              {this.props.token ? <Link to='/Dashboard'>Dashboard</Link> : <Link to='/'>Home</Link> }
            </li>
            <li>
              <Link to='/Products'>Products</Link>
            </li>
            <li className="last">
              <Link to='/Contact'>Contact</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
