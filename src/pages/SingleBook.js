import { Fragment, useEffect } from 'react'
import Logo from './../images/logo-color.png'
import { createBrowserRouter, RouterProvider, Route, Link, useParams, } from "react-router-dom";
import Gallery from '../components/Gallery';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import { useState } from "react";
import axios from 'axios';
import BookImg from './../images/book.jpg'




function SingleBook() {
  let params = useParams()
  console.log(params.id)
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks();
  }, [loading, setLoading])
  async function getBooks() {
    var booksUrl = 'http://localhost:3005/api/v1/books/' + params.id;

    try {
      const responseData = await axios.get(booksUrl);
      setBook(responseData.data.data)
      console.log(book);
      setLoading(false);


    } catch (error) {

      console.log(error);

    }
  }


  if (loading)
    return (<Loading />)
  else
    return (
      <div>
        <Nav activeIndex='2' />
        <div className='flex flex-row justify-between'>

          <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={BookImg} />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 class="text-sm title-font text-gray-500 tracking-widest">{book.author}</h2>
                  <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{book.title}</h1>
                  <div class="flex mb-4 text-white">

                    Rating - {book.totalBookRating}
                  </div>
                  <p class="leading-relaxed">{book.description}</p>
                  <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div class="flex">
                      <span class="mr-3 text-black">Category</span>
                      <p class="mr-3 text-white"> {book.genres[0]}</p>
                    </div>
                    <div class="flex ml-6 items-center">

                    </div>
                  </div>
                  <div class="flex">
                    <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>Read</option>
                      <option>Currently Reading</option>
                      <option>Shelf -1</option>

                    </select>
                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>



    );
}

export default SingleBook;
