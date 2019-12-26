import React from 'react';

/*******

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <label htmlFor="bar">bar</label>
                <input type="text" onClick={() => {console.log("clicked.")}} onChange={() => {console.log("changed.")}}/>
            </React.Fragment>
        );
    }
}
*******/


const App = () => {
  return (
    <React.Fragment>
      <Mako />
      <Mako />
      <Mako />
      <Mako />
    </React.Fragment>
  );
}


const Mako = () => {
  return (
    <div>makotooです</div>
  );
}


export default App;
