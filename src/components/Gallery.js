import { Fragment } from 'react'
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import SocialCard from './SocialCard'
import BookImg from './../images/book.jpg'
import Rating from './Rating';




function Table() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BookImg}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-400 text-s tracking-widest title-font mb-1">The title of the book</h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">Jagdish Jd</h2>
          <p className="mt-1 text-red-400">4.3*</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BookImg}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-400 text-s tracking-widest title-font mb-1">The title of the book</h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">Jagdish Jd</h2>
          <p className="mt-1 text-red-400">4.3*</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BookImg}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-400 text-s tracking-widest title-font mb-1">The title of the book</h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">Jagdish Jd</h2>
          <p className="mt-1 text-red-400">4.3*</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BookImg}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-400 text-s tracking-widest title-font mb-1">The title of the book</h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">Jagdish Jd</h2>
          <p className="mt-1 text-red-400">4.3*</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BookImg}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-400 text-s tracking-widest title-font mb-1">The title of the book</h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">Jagdish Jd</h2>
          <p className="mt-1 text-red-400">4.3*</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BookImg}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-400 text-s tracking-widest title-font mb-1">The title of the book</h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">Jagdish Jd</h2>
          <p className="mt-1 text-red-400">4.3*</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BookImg}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-400 text-s tracking-widest title-font mb-1">The title of the book</h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">Jagdish Jd</h2>
          <p className="mt-1 text-red-400">4.3*</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BookImg}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-400 text-s tracking-widest title-font mb-1">The title of the book</h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">Jagdish Jd</h2>
          <p className="mt-1 text-red-400">4.3*</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BookImg}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-400 text-s tracking-widest title-font mb-1">The title of the book</h3>
          <h2 className="text-gray-300 title-font text-lg font-medium">Jagdish Jd</h2>
          <p className="mt-1 text-red-400">4.3*</p>
        </div>
      </div>
      
            </div>
        </div>
</section>

  );
}

export default Table;
