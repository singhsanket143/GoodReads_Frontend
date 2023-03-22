import { Fragment } from 'react'
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Gallery from '../components/Gallery';
import Footer from '../common/Footer';
import Nav from '../common/Nav';
import Sidebar from '../common/Sidebar';
import { useState } from "react";
import  axios  from 'axios';



function Browse() {
  const [selected,setSelected] = useState('All');

  
  return (
        <div>
            <Nav />
            <div className='flex flex-row justify-between'>
                <Sidebar props={selected} />
                <Gallery />
            </div>
            <Footer />
        </div>
        
    
  );
}

export default Browse;
