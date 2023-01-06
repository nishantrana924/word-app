import './App.css';
import Navbar from './components/Navbar';
import React,{ useState } from 'react';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert ';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode,setMode]=useState('dark');
  const [alert,setAlert]=useState(null);

   const showAlert = (message, type) => {
        setAlert(
          {
            msg: message,
            type: type,
          }
        )
        setTimeout(() => {
          setAlert(null); 
        }, 3000);

   }
  const toggleMode =()=>{
    if(mode === 'light')
    {
      setMode ('dark');
      document.body.style.backgroundColor='gray';
      showAlert(" dark mode has been enable ","success ");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showAlert(" light mode has been enable ","success ");
    }

  }
  return (
    <>
    <Router>
    <Navbar title="Word" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
        <Routes>
          <Route  path="/newone/" element={<TextForm showAlert={showAlert} heading="enter text to anylyze below" mode={mode}/> }/>
          <Route  path="/about" element={<About/>}/>
        </Routes> 
    </Router>
    </>
  );
  
}

export default App;
