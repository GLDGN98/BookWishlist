import React from "react";
import { BookPreview } from "./book-preview";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'



export const BookList = ({ pageIdx, book, onChangePage, books, setBooks }) => {

  return <div className="book-list">
    <BookPreview books={books} setBooks={setBooks} book={book} />

    {pageIdx > -1 && <button className="next-page-btn" onClick={() => onChangePage(-1)}>
      <MdOutlineArrowBackIosNew />
    </button>}

    {pageIdx < books.length && <button className="prev-page-btn" onClick={() => onChangePage(1)}>
      <MdOutlineArrowForwardIos />
    </button>}

  </div>
}
