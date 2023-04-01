import { Fragment, useState } from 'react'
import { createContext } from "react";
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Table from '../components/Table';
import Footer from '../common/Footer';
import Nav from '../common/Nav';
import Sidebar from '../components/Sidebar';
import SectionProvider  from '../helpers/sectionProvider'




function Dashboard() {

  const [selectedTab,setSelectedTab] = useState('All')
  return (
        <div>
          <SectionProvider>
            <Nav activeIndex='1' />
            <div className='flex flex-row justify-between'>
                <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <Table />
            </div>
            <Footer />
          </SectionProvider>
        </div>
        
    
  );
}

export default Dashboard;
