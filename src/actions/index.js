import * as constants from '../constants/constants';
 console.log(constants.OPEN_NAV_DRAWER);
export function toggleNav(toggleAction){
    if(toggleAction==="open"){
        return{
            type:constants.OPEN_NAV_DRAWER,
            payload:{}
        }
    }
    else{
        return{
            type:constants.CLOSE_NAV_DRAWER,
            payload:{}
        }
    }
}

export function setActiveContext(context){
    return{
        type:context,
        payload:{}
    }  
}