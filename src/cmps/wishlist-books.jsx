import React, { useEffect } from "react";

export function WishlistBooks({ books }) {

    function wishedBooks() {
        return books.filter(book => book.isWished)
    }

    return (
        <aside className="wishlist-books">
            <div>{wishedBooks().map(book => (
                <div key={book._id}>
                    {book.title}
                </div>
            ))}</div>
        </aside>
    )
}