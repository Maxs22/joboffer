import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import DefaultHome from './components/defaultHome/defaultHome';
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (

    <Provider store={store}>
      <Router>
        <div className="App">
          <DefaultHome></DefaultHome>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
