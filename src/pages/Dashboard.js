import { Fragment } from 'react'
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Table from '../components/Table';
import Footer from '../common/Footer';
import Nav from '../common/Nav';
import Sidebar from '../common/Sidebar';

function Dashboard() {
  return (
        <div>
            <Nav />
            <div className='flex flex-row justify-between'>
                <Sidebar />
                <Table />
            </div>
            <Footer />
        </div>
        
    
  );
}

export default Dashboard;
