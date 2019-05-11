export const LOG_IN_USER = 'LOG_IN_USER';

export function logInUser(userId){
    return {
        type: LOG_IN_USER,
        userId
    }
}