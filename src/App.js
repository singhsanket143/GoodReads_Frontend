
import './App.css';
import Nav from './common/Nav'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
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
