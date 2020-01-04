import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { count : 0 };
  }

  addCounter() {
    this.setState({ count : this.state.count + 1 });
  }

  render() {
    return (
      <React.Fragment>
        <CountButton addFunc={this.addCounter.bind(this)}/>
        <p>{this.state.count}</p>
      </React.Fragment>
    );
  }
}


class CountButton extends Component {
  render () {
    return (
        <button onClick={this.props.addFunc}>+1</button>
    );
  }
}

CountButton.propTypes = {
  addFunc: PropTypes.func
}

export default App;
