import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { loginReducer }  from '../../src/redux/loginSate/loginReducer'
import { jobListReducer }  from '../../src/redux/jobListState/jobListReducer'


const rootReducer = combineReducers({
    loginSate: loginReducer,
    jobListState:  jobListReducer
})

//Second parameter activates Redux DevTools
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;