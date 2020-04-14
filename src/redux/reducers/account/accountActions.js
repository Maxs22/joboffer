export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';


export const login = (userData) =>{

    return {
        type: LOGIN,
        payload: userData
    }
}

export const logout = () =>{

    return {
        type: LOGOUT
    }
}

export const signUp = (signUpResult) =>{

    return {
        type: SIGNUP,
        payload: signUpResult
    }
}