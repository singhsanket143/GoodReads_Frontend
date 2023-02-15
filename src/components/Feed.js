import { Fragment } from 'react'
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Nav from './Nav'
import Footer from './Footer'
import SocialCard from './SocialCard'

function Feed() {
  return (
    <div className="Feed flex flex-col">
      <SocialCard/>
      <SocialCard/>
    </div>
  );
}

export default Feed;
