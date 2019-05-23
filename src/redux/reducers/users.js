import {LIST_USERS} from '../actions/ListUsers';
import {ADD_QUESTION} from '../actions/AddQuestion';

export function users(state = {}, action){
    switch(action.type){
        case LIST_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            return {
                ...state,
                //[action.question.id]: action.question,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(action.question.id)
                }
            }
        default:
            return state;
    }
}