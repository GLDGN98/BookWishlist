import React, { useEffect } from "react";

export function WishlistBooks({ books }) {
    useEffect(() => {
        console.log(books)

    }, [books])
    return (
        <aside className="wishlist-books">

        </aside>
    )
}