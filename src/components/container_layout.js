import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import * as constants from '../constants/constants';
import AddMemberProfile from './contexts/add_member_profile';
class ContainerLayout extends Component{
    renderContext(){
        let active_context = this.props.context;
            switch(active_context){
                case constants.ADD_MEMBER_PROFILE:
                    return (<AddMemberProfile/>);
            }
            return

    }
    render(){
        return(
            <div className="container">
                {this.renderContext()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        context: state.context.active_context 
    }
}
export default connect(mapStateToProps)(ContainerLayout);