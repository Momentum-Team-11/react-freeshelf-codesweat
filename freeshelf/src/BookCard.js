import React, { useState } from "react";

const BookCard = (props) => {
    const {book} = props
    const [isExpanded, setIsExpanded] = useState(false)
    return (
    <>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.shortDescription}</p>
        <img src={book.coverImageUrl} alt={book.shortDescription}></img>
        <button
        onClick={() => {
            console.log("button clicked");
            setIsExpanded(!isExpanded);
        }}
        >
        More Information
        </button>
        {isExpanded && (
        <>
            <p>URL: {book.url}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Publication Date: {book.publicationDate}</p>
            <p>Full description: {book.detailedDescription}</p>
        </>
        )}
    </>
    );
};

export default BookCard
