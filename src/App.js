import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog'
import Checkout from './pages/Checkout/Checkout'
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => 
            <NavBar />
          }/>
        <Route exact path='/catalog' render={() => <Catalog />}/>
        <Route exact path='/checkout' render={() => <Checkout />}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
  // helper methods

  // callback methods

  // lifecycle methods
}

export default App;
