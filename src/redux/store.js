import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { LoginReducer }  from '../redux/Account/LoginReducer';
import { JobListReducer }  from './Job/JobListReducer';
import { JobDetailReducer } from './Job/JobDetailReducer';
import { SkillManagerReducer } from './SkillManager/SkillManagerReducer';

const rootReducer = combineReducers({
    LoginState: LoginReducer,
    JobListState:  JobListReducer,
    JobDetailState: JobDetailReducer,
    SkillManagerReducer: SkillManagerReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;