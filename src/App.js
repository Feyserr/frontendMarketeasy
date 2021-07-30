import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import editProducts from './pages/editProducts/editProducts';
import Home from './pages/Home/index';
import './App.css';


export default function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/products" component={Home}/>
        <Route  path="/products/:id" component={editProducts}/>
        <Route render={() => <Redirect to="/"/>}/>
      </Switch>
    </BrowserRouter>


  )

}