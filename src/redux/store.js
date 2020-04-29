import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { mainAppReducer }  from '../../src/redux/mainApp/mainAppReducer'


const rootReducer = combineReducers({
    mainApp: mainAppReducer
})

//Second parameter activates Redux DevTools
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;