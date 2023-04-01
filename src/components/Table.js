import { Fragment, useContext ,useEffect, useState} from 'react'
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import SocialCard from './SocialCard'
import BookImg from './../images/book.jpg'
import Rating from './Rating';
import SectionContext from '../helpers/sectionContext'
import bookData from '../data/books.json'

var myBooks = bookData;


function Table() {
  const {section,setSection} = useContext(SectionContext)
  

  
  console.log(JSON.stringify(myBooks))
  function getBooksBySection(section) {
    return bookData.filter(function(item){
        return item.section == section;
    })
  }
  useEffect(() => {
    if(section == "All")
        myBooks = bookData;
    else
        myBooks = getBooksBySection(section)
  },[section])

  return (
    
<div className=" px-4 w-full relative overflow-x-auto shadow-md sm:rounded-lg">
    <h1>{section}</h1>
    <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Cover
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Author
                </th>
                <th scope="col" className="px-6 py-3">
                    Rating
                </th>
                <th scope="col" className="px-6 py-3">
                    Section
                </th>
                <th scope="col" className="px-6 py-3">
                    Date added
                </th>
            </tr>
        </thead>
        <tbody>
            {
                myBooks.map((item) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-32 p-4">
                            <img src={BookImg} alt="Apple Watch" />
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.bookname}
                        </td>
                        <td className="px-6 py-4">
                        {item.author}

                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        <Rating rating={item.rating} />
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">{item.section}</a>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">{item.published_date}</a>
                        </td>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
</div>

  );
}

export default Table;
