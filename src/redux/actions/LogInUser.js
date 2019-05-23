export const LOG_IN_USER = 'LOG_IN_USER';

function logInUser(user){
    return {
        type: LOG_IN_USER,
        user
    }
}

export function handleLogInUser(user){
    return (dispatch) => {
        return dispatch(logInUser(user))
    }
}