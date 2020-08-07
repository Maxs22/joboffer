import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { LoginReducer }  from '../redux/Account/Login/LoginReducer';
import { JobListReducer }  from '../redux/JobSeeker/JobList/JobListReducer';
import { JobDetailReducer } from '../redux/JobSeeker/JobDetail/JobDetailReducer';
import { RecruiterCommonReducer} from './Recruiter/Common/RecruiterCommonReducer';
import { RecruiterJobListReducer } from '../redux/Recruiter/JobList/RecruiterJobListReducer';
import { SharedReducer } from '../redux/Shared/SharedReducer';

const rootReducer = combineReducers({
    LoginState: LoginReducer,
    JobListState:  JobListReducer,
    JobDetailState: JobDetailReducer,
    RecruiterCommonState: RecruiterCommonReducer,
    RecruiterJobListState: RecruiterJobListReducer,
    SharedState: SharedReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;