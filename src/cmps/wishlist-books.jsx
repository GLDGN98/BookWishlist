import React from "react";
import { CiSquareRemove } from 'react-icons/ci'
import { bookService } from "../services/book.service";

export function WishlistBooks({ books, setBooks }) {

    function wishedBooks() {
        return books.filter(book => book.isWished)
    }

    async function unWishBook(book) {
        book.isWished = false
        await bookService.save(book)
        setBooks([...books])
    }

    function bookTitleHandle(title) {
        if (title.length > 30) return title.substring(0, 30) + '...'
        else return title
    }

    return (
        <aside className="wishlist-books">
            <ul>{wishedBooks().map(book => (
                <li key={book._id}>
                    <span className="orange-badge"></span>
                    {bookTitleHandle(book.title)}
                    <button className="unwish-btn" onClick={() => unWishBook(book)}><CiSquareRemove /></button>
                </li>
            ))}</ul>
        </aside>
    )
}