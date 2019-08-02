import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Login from './pages/Login.jsx'

import TaskCards from "./components/TaskCards.jsx"

function App() {
  return (
    <div>
      {/* <Login/> */}
      <TaskCards></TaskCards>
    </div>
  );
}

export default App;
