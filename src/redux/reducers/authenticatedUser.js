import {LOG_OUT_USER} from '../actions/LogOutUser';
import {LOG_IN_USER} from '../actions/LogInUser';

export function authenticatedUser(state = null, action){
     switch(action.type){
        case LOG_IN_USER:
            return {
                ...state,
                authenticatedUser : action.user
            }        
        case LOG_OUT_USER:
            return null
        default:
            return state;
    }
}