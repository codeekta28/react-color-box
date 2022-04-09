import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import ColorBoxContainer from './Components/ColorBoxContainer';

export class App extends Component {
  render() {
    return (
      <div className='App'>
         <h1>This is ColorBox</h1>
        <ColorBoxContainer/>
      </div>
    )
  }
}

export default App
