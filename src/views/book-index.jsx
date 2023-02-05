import React, { useEffect, useState } from "react";
import { BookList } from "../cmps/book-list";
import { bookService } from "../services/book.service";

export const BookIndex = () => {

  const [books, setBooks] = useState([])

useEffect(() => {
  loadBooks()
},[])


 function loadBooks() {  
bookService.query().then(setBooks)
   
}


  return <div className="book-index">
    <BookList books={books} />
  </div>;
};
