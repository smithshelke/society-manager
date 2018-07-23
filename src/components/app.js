import React, { Component } from 'react'
import HeaderLayout from '../components/header_layout';
import ContainerLayout from '../components/container_layout';
import NavDrawerLayout from '../components/nav_drawer_layout';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    // <BrowserRouter>
    //   <div className="app">
    //     <Route path='/' component={HeaderLayout}/>
    //     <Route path='/' component={ContainerLayout}/>
    //     <Route path='/' component={NavDrawerLayout}/>
    //   </div>
    // </BrowserRouter>
    <div className="app">
      <HeaderLayout/>
      <ContainerLayout/>
      <NavDrawerLayout/>
    </div>

    )
  }
}
