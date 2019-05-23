import { showLoading, hideLoading } from "react-redux-loading";
import {_saveQuestion} from '../../utils/_DATA';
export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question){
    console.log('addQuestion')
    console.log(question)
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(values){
    return(dispatch, getState) => {
        const {authenticatedUser} = getState();

        console.log(authenticatedUser);

        dispatch(showLoading())

        return _saveQuestion(
            {
                optionOneText :values.optionOne, 
                optionTwoText : values.optionTwo, 
                author : authenticatedUser.id
            })
            .then((q) => dispatch(addQuestion(q)))
            .then(dispatch(hideLoading()))
            // .then(window.history.push('/'))
    }
}