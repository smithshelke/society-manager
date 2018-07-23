import React, {  Component } from 'react';
import {connect} from 'react-redux';
import {toggleNav} from '../actions/index';
class HeaderLayout extends Component {
  onNavClick(){
    console.log('nav-menu-box clicked');
    if(this.props.nav_state==="close"){
      this.props.toggleNav("open");
    }
    else{
      this.props.toggleNav("close");
    }
  }
  render() {
    return (
      <div>
      <header>  
        <div className="menu-container" onClick={this.onNavClick.bind(this)}>
          <div className="menu-nav">      
            <img src="http://images.newindianexpress.com/images/FrontEnd/images/hamburger_menu.png" width="30px"/>
          </div>
          <div className="menu-text">
            <h5>MENU</h5>
          </div>
        </div>
        <div className="hero-text-box">
          <h2 className="title"> CRYSTAL DASHBOARD </h2>
        </div>        
        <div className="user-logo-box">
          <div className="user-logo">
            <h4>A</h4>
          </div>
          <p>A.H SHELKE</p>
        </div>
         
      </header>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    nav_state:state.header.nav_state
  };
}

const actions = {
  toggleNav
}

export default connect(mapStateToProps,actions)(HeaderLayout);