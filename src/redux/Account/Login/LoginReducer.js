const initialState = {
    loginRequired: false,
    loggedInSuccessfully: false,
    logoutRequired: false,
    loggedOutSuccessfully: false,
    isRecruiter: false
}

export function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_REQUIRED': return {
            ...state,
            loginRequired: true
        }
        case 'LOGGED_IN_SUCCESSFULLY': {

            sessionStorage.setItem("token", action.payload.token);

            return {
                ...state,
                loggedInSuccessfully: true,
                loginRequired: false,
                isRecruiter: action.payload.isRecruiter
            }
        }
        case 'LOGOUT_REQUIRED': return {
            ...state,
            logoutRequired: true
        }
        case 'LOGGED_OUT_SUCCESSFULLY': {

            sessionStorage.removeItem("token");

            return {
                ...state,
                logoutRequired: false,
                loggedOutSuccessfully: true,
                loggedInSuccessfully: false,
                isRecruiter: false
            }
        }
        case 'LOGIN_CANCELED': return {
            ...state,
            loginRequired: false
        }
        case 'LOGOUT_CANCELED': return {
            ...state,
            logoutRequired: false
        }
        case 'LOGIN_FAILED': return {
            ...state,
            loggedInSuccessfully: false,
            loginRequired: true
        }
        default: return state
    }
}

