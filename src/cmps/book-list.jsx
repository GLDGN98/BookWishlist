import React from "react";
import { BookPreview } from "./book-preview";
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import {MdOutlineArrowForwardIos} from 'react-icons/md'



export const BookList = ({ book, onNextPage, onPrevPage }) => {
  return <div className="book-list">
          <BookPreview book={book} />
          <button className="next-page-btn" onClick={onNextPage}>
          <MdOutlineArrowBackIosNew/>
          </button>
          <button className="prev-page-btn" onClick={onPrevPage}>
          <MdOutlineArrowForwardIos/>
          </button>
  </div>;
};
