export const loginRequired = {
    type: 'LOGIN_REQUIRED'
}

export function loggedInSuccessfully (payload){
    return {
        type: 'LOGGED_IN_SUCCESSFULLY',
        payload: payload
    }
}

export const logoutRequired = {
    type: 'LOGOUT_REQUIRED'
}

export const loggedOutSuccessfully = {
    type: 'LOGGED_OUT_SUCCESSFULLY'
}

export const loginCanceled = {
    type: 'LOGIN_CANCELED'
}

export const logoutCanceled = {
    type: 'LOGOUT_CANCELED'
}

export const loginFailed = {
    type: 'LOGIN_FAILED'
}