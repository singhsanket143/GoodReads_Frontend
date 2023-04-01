import { Fragment,useState,useEffect,useContext } from 'react'
import Logo from './../images/logo-color.png'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Nav from '../common/Nav'
import axios from 'axios';
import Book from './Book';






function Table() {
  
  const [books,setBooks] = useState([]);
  const [loading,setLoading] =useState(true);

  useEffect(()=>{
    getBooks();
  },[loading,setLoading])
  async function getBooks() {
    var booksUrl = 'http://localhost:3005/api/v1/books';
       
       try {
          const responseData = await axios.get(booksUrl);
          console.log(responseData.data.data);
          setBooks(responseData.data.data)
          setLoading(false);
          
          
       } catch (error) {
          
          console.log(error);
          
       }
  }
  

  
  if(loading)
  return(<h3>Loading</h3>)
  else
  return (
    
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
      
      {
        books.map((item)=>(
          <Book id={item._id} bookName={item.title}
          authorName={item.author}
          genre={item.genres[0]} 
          description={item.description}>

          </Book>
        ))
      }
      
      
            </div>
        </div>
</section>

  );
}

export default Table;
