
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './components/Notes'
import About from './components/About'
import NoteState from './context/notes/noteState';

function App() {
  return (
    <div className="App">
      <NoteState>
      <Router>
      <Navbar/>
      <div className="container">
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' exact element={<About/>} />
            </Routes>
            </div>
        </Router>
        </NoteState>
    </div>
  );
}

export default App;
