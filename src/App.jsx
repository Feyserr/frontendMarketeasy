import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import editProducts from './pages/editProducts/editProducts';
import Home from './pages/Home/index';
import './App.css';
import NewProduct from './pages/newProduct/newProduct';


export default function App(){
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Home}/>
        <Route exact path="/products/:id" component={editProducts}/>
        <Route exact path="/new/products" component={NewProduct}/>
        <Route render={() => <Redirect to="/"/>}/>
      </Switch>
  )

} 