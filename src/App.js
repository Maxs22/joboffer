import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import Dashboard from './components/dashboard/dashboard';



function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard></Dashboard>
      </div>
    </Provider>
  );
}

export default App;
