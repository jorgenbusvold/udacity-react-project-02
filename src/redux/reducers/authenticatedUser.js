import {LOG_OUT_USER} from '../actions/LogOutUser';
import {LOG_IN_USER} from '../actions/LogInUser';
import {ADD_QUESTION} from '../actions/AddQuestion';
import {ADD_QUESTION_VOTE} from '../actions/AddQuestionVote';

export function authenticatedUser(state = null, action){
     switch(action.type){
        case LOG_IN_USER:
            return {
                ...state,
                ...action.user
            }        
        case LOG_OUT_USER:
            return null
        case ADD_QUESTION:
            return {
                ...state,
                questions: state.questions.concat(action.question.id)
            }
        case ADD_QUESTION_VOTE:
            //const answer = {[action.vote.question.id]:action.vote.option};
            return {
                ...state,
                answers: Object.assign(state.answers,{[action.vote.question.id]:action.vote.option})
            }
        default:
            return state;
    }
}