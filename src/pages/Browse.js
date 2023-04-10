import { Fragment } from 'react'
import Logo from './../images/logo-color.png'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import { useState } from "react";
import axios from 'axios';



function Browse() {
  const [selected, setSelected] = useState('All');


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

export default Browse;
