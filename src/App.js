import React, { Component } from 'react';
import logo from './jest-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our Jest workshop</h1>
        </header>
        <p className="App-intro">
          <a href="http://jestjs.io/en/">Jest</a> provides a fantastic user
          experience, with instant feedback and remarkable performance,
          out-of-the-box mocking, code coverage support, sandboxing, etc., as
          well as running tests in parallel. It also has a special feature:
          snapshot testing and also plays nicely with other testing libraries
          beside being highly extendable via its plugin system.
        </p>
        <p className="App-intro">
          <a href="https://pptr.dev/">Puppeteer</a> is a Node library which
          provides a high-level API to control headless Chrome or Chromium over
          the DevTools Protocol. It can also be configured to use full
          (non-headless) Chrome or Chromium.
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
