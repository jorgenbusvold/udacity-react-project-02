import {getInitialData} from '../../utils/api';
import {listUsers} from './ListUsers';
import {listQuestions} from './ListQuestions';
import {showLoading, hideLoading} from 'react-redux-loading';

export function handleInitialData(){
    // let users = _getUsers()
    //                 .then(function(fulfilled){
    //                     console.log(fulfilled)
    //                     return fulfilled;
    //                 })

    // console.log('Log users..')                    
    // console.log(users);
    return (dispatch) => {
        dispatch(showLoading())

        return getInitialData()
        .then(({users,questions}) => {
            dispatch(listQuestions(questions))
            dispatch(listUsers(users))
            dispatch(hideLoading())
        })
        .catch(function(error){
            console.log('some error occured while fetching users: '+error)
        })
    }
}