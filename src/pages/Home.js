import { Fragment } from 'react'
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import Feed from '../components/Feed'

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
