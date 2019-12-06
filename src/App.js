import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0, test: "ok"}
    }
    makeClick = () => {
        this.setState( (prevState)  => {return { counter: ++prevState.counter } })
    }
    render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         You clicked  {this.state.counter  } times {this.state.test}
        </p>
        <button onClick={ () => {this.makeClick(this.state.counter)}}> click it </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
    }
}

export default App;
