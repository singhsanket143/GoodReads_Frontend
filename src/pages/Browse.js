
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useContext } from "react";
import ErrorPage from '../pages/ErrorPage'
import AuthContext from '../helpers/authContext';
import Cookies from 'universal-cookie'



const cookies = new Cookies();

function Browse() {
  const { isAuthenticated, login } = useContext(AuthContext);
  const loggedEmail = cookies.get('email')
  const loggedUsername = cookies.get('loggedUsername')

  login();
  
  console.log(isAuthenticated+loggedEmail+loggedUsername);
  //checklogin
  if (isAuthenticated) {
    //render dashboard page
    return (
      <div>
      <Nav activeIndex='2' />
      <div className='flex flex-row justify-between'>

        <Gallery />
      </div>
      <Footer />
    </div>
    );
  }
  else {
    //render 404
    return (
      <div>
        <ErrorPage />
      </div>
    )
  }
  
}

export default Browse;
