import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Parent component */
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
        <Display count={this.state.count}/>
      </React.Fragment>
    );
  }
}

/* Child components */
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

class Display extends Component {
  render () {
    return (
      <p>{this.props.count}</p>
    );
  }
}

Display.propTypes = {
  count: PropTypes.number
}

export default App;
