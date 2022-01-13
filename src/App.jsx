import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Admin from './components/Admin';

function App() {
  return (
    <div className='container'>
      <Router>

      <Routes>
      <Route exact path='/' element={<Inicio/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
