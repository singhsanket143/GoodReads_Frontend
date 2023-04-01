
import Input from './Input'
import {Link,useNavigate} from "react-router-dom";
import BookImg from './../images/book.jpg'
import axios from 'axios';

const getBookUrl = 'http://localhost:3005/api/v1/books/';

function Book(props) {

  
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a href={'/book/'+props.id} className="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BookImg}/>
    </a>
    <div className="mt-4">
      <h3 className="text-gray-400 text-s tracking-widest title-font mb-1">{props.bookName}</h3>
      <h2 className="text-gray-300 title-font text-lg font-medium">{props.authorName}</h2>
      <p className="mt-1 text-red-400">{props.genre}</p>
      <p className="mt-1 text-red-400">{props.description}</p>
    </div>
  </div>
    
  );
}

export default Book;
