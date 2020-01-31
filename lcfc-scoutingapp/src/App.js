import React from 'react';
import './App.css';
// import LoginForm from './Components/LoginForm/LoginForm'
import NavBar from './Components/NavigationBar/NavBar'
import PlayerReportP from './Pages/PlayerReport'


function App() {
  return (
    <div className="App">
      {/* <LoginForm />  */}
      <NavBar />
      <PlayerReportP />
    </div>
  );
}

export default App;
