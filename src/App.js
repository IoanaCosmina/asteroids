import React, { Component } from 'react';
import './App.css';
import Today from './Today/Today';
import History from './History/History';

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="topheader">
          <header className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">AsteroidAlert</span>
              </div>
              <div className="navbar-end">
                <a className="navbar-item" href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">Powered by NASA Open APIs</a>
              </div>
            </nav>
          </header>
        </div>
        <section className="results--section">
          <div className="container">
            <h1>AsteroidAlert provides realtime information about near Earth asteroids</h1>
          </div>
          <div className="results--section__inner">
            <Today />
            {/* <History /> */}
          </div>
        </section>
      </div>
    );
  }
}

export default App;