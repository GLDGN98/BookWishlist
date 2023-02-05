import React from "react";
import { BookPreview } from "./book-preview";
import { WishlistBooks } from "./wishlist-books";


export const BookList = ({books}) => {
  return <ul className="book-list">
    {books?.map(book => {
        return (
            <li>
                <BookPreview book={book} />
            </li>
        )
    })}
  </ul>;
};
