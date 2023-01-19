import React from "react";
import { Link } from "react-router-dom";
const books = [
    { bid: 1, bookName: "Car" },
    { bid: 2, bookName: "Product" },
    { bid: 3, bookName: "Dog" },
];


export default function BookList() {
    return (
        <div>
            <h2>BookList</h2>
            <ul>
                {books.map(({ bid, bookName }) => {
                    return (
                        <li>
                            <Link to={`/books/${bid}`}>{bookName}</Link><br />

                            {/* <a href={`/books/${bid}`}>aaa {bookName}</a> */}
                            {/* <Link to="/books/1">A</Link> */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}