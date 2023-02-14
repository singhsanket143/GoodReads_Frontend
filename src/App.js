
import './App.css';
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App bg-gray-700 dark:bg-gray-800 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>      
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
