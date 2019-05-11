export const LIST_USERS = 'LIST_USERS';

export function listUsers(users){
    return {
        type: LIST_USERS,
        users
    }
}