import {LIST_QUESTIONS} from '../actions/ListQuestions';

export function questions(state = {}, action){
    switch(action.type){
        case LIST_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state;
    }
}