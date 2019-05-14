import {getInitialData} from '../../utils/api';
import {listUsers} from './ListUsers';
import {logInUser} from './LogInUser';
import {logOutUser} from './LogOutUser';
import {listQuestions} from './ListQuestions';

const authedUserId = 'tylermcginnis';

export function handleInitialData(){
    // let users = _getUsers()
    //                 .then(function(fulfilled){
    //                     console.log(fulfilled)
    //                     return fulfilled;
    //                 })

    // console.log('Log users..')                    
    // console.log(users);
    return (dispatch) => {
        return getInitialData().
        then(({users,questions}) => {
            dispatch(listQuestions(questions))
            dispatch(listUsers(users))
            dispatch(logInUser(authedUserId))
        })
        .catch(function(error){
            console.log('some error occured while fetching users: '+error)
        })
    }
}