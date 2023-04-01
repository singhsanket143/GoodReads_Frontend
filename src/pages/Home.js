import { Fragment,useContext } from 'react'

import { useNavigate } from "react-router-dom";

import Nav from '../common/Nav'
import Footer from '../common/Footer'
import Feed from '../components/Feed'
import ErrorPage from '../pages/ErrorPage'

import AuthContext from '../helpers/authContext';
import Cookies from 'universal-cookie'



const cookies = new Cookies();
function Home() { 
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const loggedEmail = cookies.get('email')
  const loggedUsername = cookies.get('loggedUsername')

  const navigate = useNavigate();
  login(); 
  console.log(isAuthenticated);
  //checklogin
  if(isAuthenticated)
  {
    //render home page
    return (
      <div className="Home">
        <Nav activeIndex='0'/>
          <h3>Welcome {loggedUsername}</h3>
          <Feed/>
        <Footer />
      </div>
    );
  }
  else{
    //render 404
    return(
      <div>
        <ErrorPage />
      </div>
    )
  }
}

export default Home;
