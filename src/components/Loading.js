import { Fragment,useEffect } from 'react'
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link, useParams,} from "react-router-dom";
import Gallery from '../components/Gallery';
import Footer from '../common/Footer';
import Nav from '../common/Nav';





function Loading() {
  
  return (
    <div>
            <Nav activeIndex='2'/>
            <h1> Loading Please Wait</h1>
        
            <Footer />
        </div>
    
   

  );
}

export default Loading;
