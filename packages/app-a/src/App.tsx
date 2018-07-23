import * as React from 'react';
import './App.css';

import { Main } from 'lib-simple-comp';
import { CSSModuleSample } from './CSSModuleSample';
import logo from './logo.svg';
import { SCSSModuleSample } from './SCSSModuleSample';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CSSModuleSample />
        <SCSSModuleSample />
        <Main />
      </div>
    );
  }
}

export default App;
