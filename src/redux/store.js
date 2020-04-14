import { createStore } from 'redux'
import { combineReducers } from 'redux'
import  accountReducer  from './reducers/account/accountReducer'

const rootReducer = combineReducers({
    account: accountReducer
})

const store = createStore(rootReducer);

export default store;