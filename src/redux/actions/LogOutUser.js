export const LOG_OUT_USER = 'LOG_OUT_USER';

export function logOutUser(userId) {
    return {
        type: LOG_OUT_USER,
        userId
    }
}