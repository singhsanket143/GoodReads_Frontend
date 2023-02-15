import { Fragment } from 'react'
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Nav from './Nav'
import Footer from './Footer'
import Feed from './Feed'

function Home() {
  return (
    <div className="Home">
      <Nav />
        <Feed/>
      <Footer />
    </div>
  );
}

export default Home;
