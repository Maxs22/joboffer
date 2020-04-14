import { LOGIN, LOGOUT, SIGNUP} from './accountActions'


const initialState = {
    userInformation: {
        firstName: 'complete',
        lastNAme: 'complete',
        country: 'complete'
    }
}

const accountReducer = (state = initialState, action) => {

    switch(action.type)
    {
        case LOGOUT:
            return {
                ...state
            }
        case LOGIN:
            return {
                ...state
            }
        case SIGNUP:
            return {
                ...state
            }
        default: return state
    }
}

export default accountReducer