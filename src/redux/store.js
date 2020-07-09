import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { LoginReducer }  from '../redux/Account/Login/LoginReducer';
import { JobListReducer }  from '../redux/JobSeeker/JobList/JobListReducer';
import { JobDetailReducer } from '../redux/JobSeeker/JobDetail/JobDetailReducer';
import { RecruiterReducer} from '../redux/Recruiter/RecruiterReducer';

const rootReducer = combineReducers({
    LoginState: LoginReducer,
    JobListState:  JobListReducer,
    JobDetailState: JobDetailReducer,
    RecruiterState: RecruiterReducer
})


//Second parameter activates Redux DevTools
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;