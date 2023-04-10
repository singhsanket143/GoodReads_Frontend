
import './App.css';
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Browse from './pages/Browse';
import SingleBook from './pages/SingleBook';
import Cookies from 'js-cookie';
import { useState } from 'react';


function App() {

  const [userLogged, setUserLogged] = useState(null);
  const [username, setUsername] = useState(undefined);


  return (
    <div className="App bg-gray-700 dark:bg-gray-800 ">

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<ErrorPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/book/:id" element={<SingleBook />}></Route>
      </Routes>


    </div>
  );
}

export default App;
