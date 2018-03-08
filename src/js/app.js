import React, { Component } from 'react';
import { render } from 'react-dom';


let styles = require('../css/style.scss');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    console.log(styles);
    return (
      <div>
        <div>
          Hello from react
        </div>
        <div className={styles.img} alt='Commander Keen' />
        <img src={ require('../assets/keen.png') } />
      </div>
      );
  }
}

render(<App />, document.getElementById('app'));