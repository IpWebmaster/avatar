import React, { PropTypes } from 'react';
import './app.css';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  static checkLogin() {
    /* const login = window.localStorage.getItem('rr_login');
    if (login !== 'admin') {
      window.location = '#/login';
    } */
  }

  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

export default App;
