import { Fragment } from 'react'
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Nav from '../common/Nav'
import Footer from '../common/Footer'
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
