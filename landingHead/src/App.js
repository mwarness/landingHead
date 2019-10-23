import React from 'react';
import './App.css';
import VectorHead from '../src/components/VectorHead/utils';

class App extends React.Component {

  componentDidMount() {
    var vectorHead = new VectorHead();
  }

  render() {
    return (
    <div className="App">
      <canvas>
        <VectorHead/>
      </canvas>

    </div>
    );
  }
}

export default App;
