import {_getUsers} from '../../_DATA';
import {listUsers} from './ListUsers';
import {logInUser} from './LogInUser';
import {logOutUser} from './LogOutUser';

const authedUserId = 'tylermcginnis';

export function handleInitialData(){
    return (dispatch) => {
        return _getUsers().
        then(({users}) => {
            dispatch(listUsers(users))
            dispatch(logInUser(authedUserId))
            dispatch(logOutUser(authedUserId))
        })
    }
}