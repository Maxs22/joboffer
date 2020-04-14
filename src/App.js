import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './components/account/login'


function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <Login></Login>
      </div>
    </Provider>
  );
}

export default App;
