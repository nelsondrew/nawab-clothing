import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component';

function App() {
  return (
    <div >
      <Header/>
      <Switch>
     <Route  exact  path='/' component = {Homepage}/>
      <Route  path='/shop' component = {ShopPage}/>
     
      </Switch>
    </div>
  );
}

export default App;
