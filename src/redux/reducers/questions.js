import {LIST_QUESTIONS} from '../actions/ListQuestions';
import { ADD_QUESTION } from '../actions/AddQuestion';

export function questions(state = {}, action){
    console.log('Question-Reducer.Action')
    console.log(action)

    switch(action.type){
        case LIST_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state;
    }
}