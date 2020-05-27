const initialState = {
    loginRequired: false,
    loggedInSuccessfully: false,
    logoutRequired: false,
    loggedOutSuccessfully: false
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_REQUIRED': return {
            ...state,
            loginRequired: true
        }
        case 'LOGGED_IN_SUCCESSFULLY': return {
            ...state,
            loggedInSuccessfully: true,
            loginRequired: false
        }
        case 'LOGOUT_REQUIRED': return {
            ...state,
            logoutRequired: true
        }
        case 'LOGGED_OUT_SUCCESSFULLY': return {
            ...state,
            logoutRequired: false,
            loggedOutSuccessfully: true,
            loggedInSuccessfully: false
        }
        case 'LOGIN_CANCELED': return {
            ...state,
            loginRequired: false
        }
        case 'LOGOUT_CANCELED': return {
            ...state,
            logoutRequired: false
        }
        default: return state
    }
}
