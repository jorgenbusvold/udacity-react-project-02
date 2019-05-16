import { showLoading, hideLoading } from "react-redux-loading";
import {_saveQuestion} from '../../utils/_DATA';
export const ADD_QUESTION = 'ADD_QUESTION';

export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOne, optionTwo){
    return(dispatch, getState) => {
        const {authenticatedUser} = getState();

        console.log(authenticatedUser);

        dispatch(showLoading())

        return _saveQuestion({
            optionOneText :optionOne, 
            optionTwoText : optionTwo, 
            author : authenticatedUser.authenticatedUser.id
            })
            .then((q) => addQuestion(q))
            .then(dispatch(hideLoading()))
    }
}