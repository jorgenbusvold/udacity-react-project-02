import {combineReducers} from 'redux';
import {authenticatedUser} from './authenticatedUser'
import {users} from './users';
import {questions} from './questions';

export default combineReducers({
    authenticatedUser,
    users, 
    questions
})

