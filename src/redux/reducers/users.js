import {LIST_USERS} from '../actions/ListUsers';

export function users(state = {}, action){
    switch(action.type){
        case LIST_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state;
    }
}