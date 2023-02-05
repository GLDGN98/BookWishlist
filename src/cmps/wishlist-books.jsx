import React, { useEffect } from "react";

export function WishlistBooks({ books }) {



    return (
        <aside className="wishlist-books">
            {books.map(book => (
                <div key={book._id}>
                    {book.isWished && book.title}
                </div>
            ))}
        </aside>
    )
}