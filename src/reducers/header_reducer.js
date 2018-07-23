import {OPEN_NAV_DRAWER,CLOSE_NAV_DRAWER} from '../constants/constants';
export default function (state={nav_state:"close"},action){
    switch (action.type){
        case OPEN_NAV_DRAWER:
            return {...state,nav_state:"open"};
        case CLOSE_NAV_DRAWER:
            return {...state,nav_state:"close"}
    }
    return state;
}