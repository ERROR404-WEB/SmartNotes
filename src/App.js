import Alert from './components/Alert';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './components/Notes'
import About from './components/About'
import NoteState from './context/notes/noteState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const [alert,setAlert] = useState(null) 
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <div className="App">
      <NoteState>
      <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <div className="container">
          <Routes>
            <Route path='/' exact element={<Home showAlert={showAlert}/>}  />
            <Route path='/about' exact element={<About/>} />
            <Route path='/login' exact element={<Login showAlert={showAlert} />}  />
            <Route path='/signup' exact element={<Signup showAlert={showAlert}/>}  />
            </Routes>
            </div>
        </Router>
        </NoteState>
    </div>
  );
}

export default App;
