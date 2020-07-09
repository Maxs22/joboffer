import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { LoginReducer }  from '../../src/redux/Account/Login/LoginReducer';
import { JobListReducer }  from '../../src/redux/JobSeeker/JobList/JobListReducer';
import { JobDetailReducer } from '../../src/redux/JobSeeker/JobDetail/JobDetailReducer';

const rootReducer = combineReducers({
    LoginState: LoginReducer,
    JobListState:  JobListReducer,
    JobDetailState: JobDetailReducer
})


//Second parameter activates Redux DevTools
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;