import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css'; 
import keenImage from '../assets/keen.png'; 

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
        <img src={ keenImage } alt='Commander Keen' />
      </div>
      );
  }
}

render(<App />, document.getElementById('app'));