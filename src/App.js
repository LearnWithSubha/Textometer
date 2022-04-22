import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode]= useState('light')
  const [modeBtn, setModeBtn]= useState('Enable Dark Mode')
  const [alert, setAlert]= useState(null)

  const showAlert=(alrtMsg,type)=>{
    setAlert({
      messege: alrtMsg,
      type: type
    })
     setTimeout(() => {
       setAlert(null)
     }, 1000);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-danger');
    
  }


  const changeMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    
  }

  const toggolMode=()=>{
    if(mode==='light'){
      setMode('dark')
      setModeBtn('Enable Light Mode')
      document.body.style.background = "black";
      showAlert('Dark mode enabled.','success')
    }else{
      setMode('light')
      setModeBtn('Enable Dark Mode')
      document.body.style.background = "white";
      showAlert('Light mode enabled.','success')
    }
  }
  
  return (
    <>
      <Router>
        <NavBar
          title="MyApplication"
          modeBtnTxt={modeBtn}
          toggolMode={toggolMode}
          changeMode={changeMode}
          mode={mode}
          home="home"
          other="About"
        />
        <strong>
          <Alert alert={alert} />
        </strong>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}/>
            <Route exact path="/home" element={<TextForm boxhead="Enter the text to analyze below," mode={mode} />}/>
            <Route exact path="/" element={<TextForm boxhead="Enter the text to analyze below," mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
