import React, { useState, useEffect } from "react";
import { IoMdRemoveCircle } from 'react-icons/io'
import { bookService } from "../services/book.service";

export function WishlistBooks({ books, setBooks }) {
    const [wishedBooksList, setWishedBooksList] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        setWishedBooksList(books.filter(book => book.isWished));
    }, [books]);

    async function unWishBook(book) {
        book.isWished = false;
        await bookService.save(book);
        setBooks([...books]);
    }

    function sortBooks(sortType) {
        setSortBy(prevSortBy => {
            if (prevSortBy === sortType) {
                return undefined;
            }
            return sortType;
        });
        
        if (sortBy) {
            let sortedBooks = [...wishedBooksList];
            if (sortBy === "title") {
                sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sortBy === "price") {
                sortedBooks.sort((a, b) => b.price - a.price);
            } else if (sortBy === "rating") {
                sortedBooks.sort((a, b) => b.rating - a.rating);
            }
            setWishedBooksList(sortedBooks);
        }
    }

    function bookTitleHandle(title) {
        if (title.length > 30) return title.substring(0, 30) + '...';
        else return title;
    }

    function totalPrice() {
        let total = 0;
        wishedBooksList.forEach(book => {
            total += +book.price;
        });
        return Math.floor(total);
    }

    return (
        <aside className="wishlist-books">
            <div className="sort-books">
                <button
                    onClick={() => sortBooks("title")}
                    style={{ backgroundColor: sortBy === "title" ? "#75a19d" : "" }}
                >
                    Title
                </button>
                <button
                    onClick={() => sortBooks("price")}
                    style={{ backgroundColor: sortBy === "price" ? "#75a19d" : "" }}
                >
                    Price
                </button>
                <button
                    onClick={() => sortBooks("rating")}
                    style={{ backgroundColor: sortBy === "rating" ? "#75a19d" : "" }}
                >
                    Rating
                </button>
            </div>
            <ul>
                {wishedBooksList.map(book => (
                    <li key={book._id}>
                        <span className="orange-badge"></span>
                        {bookTitleHandle(book.title)}
                        <button className="unwish-btn" onClick={() => unWishBook(book)}><IoMdRemoveCircle /></button>
                    </li>
                ))}
            </ul>
            <h2 className="total-price">Total : ${totalPrice()}</h2>
        </aside>
    );
}
