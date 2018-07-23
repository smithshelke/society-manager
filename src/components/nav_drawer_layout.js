import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleNav, setActiveContext} from '../actions/index';
import * as constants from '../constants/constants';
var NAV_DRAWER = 'nav-drawer';
class NavDrawerLayout extends Component {
  closeNav(){
    console.log('closenav called');
    this.props.toggleNav("close");
  }

  setContext(context){
    console.log('context is set',context);
    this.props.setActiveContext(context);
    this.closeNav();
  }

  render() {
    var NAV_DRAWER = 'nav-drawer';
    if(this.props.nav_state==="open"){
     NAV_DRAWER+= ' open';
    }
    else{
      NAV_DRAWER+= ' close';
    }
    return (
    <div className={NAV_DRAWER}>
        <div className="nav-close-icon">
            <img onClick={this.closeNav.bind(this)} src="https://image.flaticon.com/icons/svg/61/61155.svg" width="20px"/>
        </div>
        {/* <div className="nav-user-info">
          <div className="nav-user-circle"></div> 
          <h5>A.H SHELKE</h5>
          <h5>601</h5>
        </div> */}
        <div>
          <ul className="nav-list">
            <li className="nav-list-item" onClick={()=>this.setContext(constants.ADD_MEMBER_PROFILE)}>
              <h4>ADD MEMBER PROFILE</h4>
            </li>
            <li className="nav-list-item" onClick={()=>this.setContext(constants.VIEW_MEMBER_PROFILE)}>
            <h4>VIEW MEMBER PROFILE</h4>
            </li>
            <li className="nav-list-item" onClick={()=>this.setContext(constants.MINUTES_OF_MEETING)}>
            <h4>MINUTES OF MEETING</h4>
            </li>
            <li className="nav-list-item" onClick={()=>this.setContext(constants.SOCIETY_EMPLOYEES)}>
            <h4>SOCIETY EMPLOYEES</h4>          
            </li>
            <li className="nav-list-item" onClick={()=>this.setContext(constants.SOCIETY_INFORMATION)}>
            <h4>SOCIETY INFORMATION</h4>          
            </li>
            <li className="nav-list-item" onClick={()=>this.setContext(constants.EVENTS)}>
            <h4>EVENTS</h4>          
            </li>
            <li className="nav-list-item" onClick={()=>this.setContext(constants.CERTIFICATE)}>
            <h4>CERTIFICATE</h4>          
            </li>
            <li className="nav-list-item" onClick={()=>this.setContext(constants.NOTICES)}>
            <h4>NOTICES</h4>                    
            </li>
            <li className="nav-list-item" onClick={()=>this.setContext(constants.BANK_DETAILS)}>
            <h4>BANK DETAILS</h4>          
            </li>
            <li className="nav-list-item" onClick={()=>this.setContext(constants.BUILDING_PROFILE)}>
            <h4>BUILDING PROFILE</h4>          
            </li>

          </ul>
        </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    nav_state:state.header.nav_state,
    active_context:state.context.active_context,
    s:state
  };
}

export default connect(mapStateToProps,{toggleNav,setActiveContext})(NavDrawerLayout);
