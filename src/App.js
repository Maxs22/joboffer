import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './pages/home/home';
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (

    <Provider store={store}>
      <Router>
        <div className="App">
          <Home></Home>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
