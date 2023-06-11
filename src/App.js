import Alert from './components/Alert';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import NoteState from './context/notes/noteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Mynotes from './components/Mynotes';
import LoadingBar from 'react-top-loading-bar'

function App() {

  const [alert,setAlert] = useState(null) 
  const [progress, setProgress] = useState(0)
  const updateProgress = (progress) =>{
    setProgress(progress);
  }

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
      <LoadingBar
            height={2}
            color='blue'
            progress={progress}
          />
          <Routes>
            <Route exact path='/'  element={<Home showAlert={showAlert} updateProgress={updateProgress}/>}  />
            <Route exact path='/mynotes'  element={<Mynotes showAlert={showAlert}  updateProgress={updateProgress}/>} />
            <Route  exact  path='/login' element={<Login showAlert={showAlert} updateProgress={updateProgress} />}  />
            <Route  exact path='/signup' element={<Signup showAlert={showAlert} updateProgress={updateProgress}/>}  />
            </Routes>
            </div>
            
        </Router>

        </NoteState>
    </div>
  );
}

export default App;
