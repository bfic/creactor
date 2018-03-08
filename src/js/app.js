import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css'; 

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>
          Hello from react
        </div>
        <div className="img" alt='Commander Keen' />
        <img src={ require('../assets/keen.png') } />
      </div>
      );
  }
}

render(<App />, document.getElementById('app'));