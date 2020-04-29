const initialState = {
    loginRequired: false,
    loggedSuccessfully: false,
}

export function mainAppReducer (state = initialState, action) {
    switch(action.type){
        case 'REQUIRE_LOGIN': return{
            ...state,
            loginRequired : true,
            loggedSuccessfully: false
            }
        case 'LOGED_SUCCESSFULLY': return {
            ...state,
            loggedSuccessfully : true,
            loginRequired : false
        }
        default: return state
    }
}

