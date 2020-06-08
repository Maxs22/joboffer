import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (

    <Provider store={store}>
      <Router>
        <div className="App">
          <Dashboard></Dashboard>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
