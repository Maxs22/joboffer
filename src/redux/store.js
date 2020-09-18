import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { LoginReducer }  from '../redux/account/loginReducer';
import { JobListReducer }  from './job/jobListReducer';
import { JobDetailReducer } from './job/jobDetailReducer';
import { SkillManagerReducer } from './skillManager/skillManagerReducer';

const rootReducer = combineReducers({
    LoginState: LoginReducer,
    JobListState:  JobListReducer,
    JobDetailState: JobDetailReducer,
    SkillManagerState: SkillManagerReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;