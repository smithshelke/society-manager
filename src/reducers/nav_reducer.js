import * as constants from '../constants/constants';

export default function(state={active_context:constants.VIEW_MEMBER_PROFILE},action){
    switch(action.type){
        case constants.VIEW_MEMBER_PROFILE:
            return {...state,active_context: constants.VIEW_MEMBER_PROFILE}
        case constants.ADD_MEMBER_PROFILE:
            return {...state,active_context: constants.ADD_MEMBER_PROFILE}
        case constants.MINUTES_OF_MEETING:
            return {...state,active_context: constants.MINUTES_OF_MEETING};
        case constants.SOCIETY_EMPLOYEES:
            return {...state,active_context: constants.SOCIETY_EMPLOYEES};
        case constants.SOCIETY_INFORMATION:
            return {...state,active_context: constants.SOCIETY_INFORMATION};
        case constants.EVENTS:
            return {...state,active_context: constants.EVENTS};
        case constants.CERTIFICATE:
            return {...state,active_context: constants.CERTIFICATE};
        case constants.NOTICES:
            return {...state,active_context: constants.NOTICES};
        case constants.BANK_DETAILS:
            return {...state,active_context: constants.BANK_DETAILS}; 
        case constants.BUILDING_PROFILE:
            return {...state,active_context: constants.BUILDING_PROFILE}; 
    }
    return state;
}