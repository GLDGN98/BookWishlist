import React from "react";
import { BookPreview } from "./book-preview";
import { WishlistBooks } from "./wishlist-books";


export const BookList = () => {
  return <div className="book-list">
    <BookPreview />
    <WishlistBooks />
  </div>
}
