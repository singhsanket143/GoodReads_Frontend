import { useContext, useState } from 'react'

import ErrorPage from '../pages/ErrorPage'
import AuthContext from '../helpers/authContext';
import Table from '../components/Table';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import SectionProvider from '../helpers/sectionProvider'
import Cookies from 'universal-cookie'



const cookies = new Cookies();

function Dashboard() {

  const [selectedTab, setSelectedTab] = useState('All')
  const { isAuthenticated, login } = useContext(AuthContext);
  const loggedEmail = cookies.get('email')
  const loggedUsername = cookies.get('loggedUsername')

  login();
  
  console.log(isAuthenticated+loggedEmail+loggedUsername);
  //checklogin
  if (isAuthenticated) {
    //render dashboard page
    return (
          <SectionProvider>
            <Nav activeIndex='1' />
            <div className='flex flex-row justify-between'>
              <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
              <Table />
            </div>
            <Footer />
          </SectionProvider>
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

export default Dashboard;
