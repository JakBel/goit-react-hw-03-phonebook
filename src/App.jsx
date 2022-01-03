import './App.css';
import Phonebook from './components/phonebook/Phonebook';
import React from 'react';
import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Phonebook {...this.state}/>
        </header>
      </div>
    );
  }
}

export default App;
