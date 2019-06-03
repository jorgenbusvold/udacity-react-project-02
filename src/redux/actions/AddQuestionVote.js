import { showLoading, hideLoading } from "react-redux-loading";
import {_saveQuestionAnswer} from '../../utils/_DATA';
export const ADD_QUESTION_VOTE = 'ADD_QUESTION_VOTE';

function addQuestionVote(vote){
    console.log('ADD_QUESTION_VOTE')
    console.log(vote)
    return {
        type: ADD_QUESTION_VOTE,
        vote
    }
}

export function handleAddQuestionVote(values){
    return(dispatch, getState) => {
        const {authenticatedUser} = getState();

        console.log(authenticatedUser);

        dispatch(showLoading())

        return _saveQuestionAnswer(
            {
                authedUser :values.authenticatedUser.id, 
                qid : values.question.id, 
                answer : values.option
            })
            .then(dispatch(addQuestionVote(values)))
            .then(dispatch(hideLoading()))
    }
}