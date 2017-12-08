import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Catalog from '../../pages/Catalog/Catalog'
import Checkout from '../../pages/Checkout/Checkout'

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <Switch>
        <Route exact path='/' render={() => 
        <div>
          <p><Link to='/catalog'>Catalog</Link></p>
          <p><Link to='/checkout'>Checkout</Link></p>
        </div>}/>
        <Route exact path='/catalog' render={() => <Catalog />}/>
        <Route exact path='/checkout' render={() => <Checkout />}/>
        </Switch>
    </div>
  )
}

export default NavBar;