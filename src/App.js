import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {useState} from 'react';
import Alertbar from './components/Alertbar';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      showAlert('Dark mode activated.','success');
      document.title = 'Text Utils - Dark Mode';
    }
    else{
      setMode('light');
      showAlert('Light mode activated.','success');
      document.title = 'Text Utils - Light Mode';
    }
  }
  const showAlert = (message,type) => {
      setAlert({
        msg : message,
        type : type
      });
  }

  return (
    // <Router>
    <>
    <Navbar title="TextUtils" where="Home" mode={mode} toggleMode={toggleMode}/>
    <Alertbar alert={alert}/>
    <Textform heading="Enter text" showAlert={showAlert} mode={mode}/>
    </>
    // <Switch>
    //       <Route exact path="/about">
    //         <About/>
    //       </Route>
    //       <Route exact path="/">

    //       </Route>
    // </Switch>
    // </Router>
  )
}

export default App;
