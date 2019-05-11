import {LOG_IN_USER} from '../actions/LogInUser';
import {LOG_OUT_USER} from '../actions/LogOutUser';

export function authedUser(state = null, action){
    switch(action.type){
        case LOG_IN_USER:
            return action.user
        case LOG_OUT_USER:
            return null
        default:
            return state;
    }
}