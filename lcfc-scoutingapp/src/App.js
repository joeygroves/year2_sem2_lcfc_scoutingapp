import React from 'react';
import './App.css';
// eslint-disable-next-line
import LoginForm from './Components/LoginForm/LoginForm'
// eslint-disable-next-line
import NavBar from './Components/NavigationBar/NavBar'
import PlayerReportP from './Pages/PlayerReport'


function App() {
  return (
    <div className="App">
      {/* <LoginForm />  */}
      {/* <NavBar /> */}
      <PlayerReportP />
    </div>
  );
}

export default App;
