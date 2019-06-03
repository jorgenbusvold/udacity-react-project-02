import {LIST_QUESTIONS} from '../actions/ListQuestions';
import { ADD_QUESTION } from '../actions/AddQuestion';
import {ADD_QUESTION_VOTE} from '../actions/AddQuestionVote';
import QuestionHandler from '../../QuestionHandler';

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
        case ADD_QUESTION_VOTE:
            const qid = action.vote.question.id;
            const hasChoosenOptionOne = action.vote.option === 'optionOne'?true:false; 

            if(hasChoosenOptionOne){
                return {
                    ...state,
                    [qid] : {
                        ...state[qid],
                        id: qid,
                        author : state[qid].author,
                        timestamp : state[qid].timestamp,
                        optionOne : state[qid].optionOne,
                            votes: Object.assign(state[qid].optionOne.votes, state[qid].optionOne.votes.concat(action.vote.authenticatedUser.id)),
                        optionTwo : state[qid].optionTwo
                    }
                }
            } else{
                return {
                    ...state,
                    [qid] : {
                        ...state[qid],
                        id: qid,
                        author : state[qid].author,
                        timestamp : state[qid].timestamp,
                        optionOne : state[qid].optionOne,
                        optionTwo : state[qid].optionTwo,
                        votes: Object.assign(state[qid].optionTwo.votes, state[qid].optionTwo.votes.concat(action.vote.authenticatedUser.id)),
                    }
                }
            }
        default:
            return state;
    }
}