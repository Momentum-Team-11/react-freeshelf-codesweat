import React, { useState } from "react";

// todo for today
// need to add null images and information for when there is nothing provide
// need to have more information change to less information
// need to change button to filled in carrot arrow

const BookCard = (props) => {
    const {book} = props
    const [isExpanded, setIsExpanded] = useState(false)
    return (
    <>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.shortDescription}</p>
        <img src={book.coverImageUrl} alt={book.shortDescription}></img>
        <button onClick={() => { 
            setIsExpanded(!isExpanded);
            console.log("button clicked!")
        }}
        >
        More Information
        </button>
        {isExpanded && (
        <>
            <p>URL: {book.url}</p>
            <p>Publisher: {book.publisher || "Information Not Available"}</p>
            <p>Publication Date: {book.publicationDate || "Information Not Available"}</p>
            <p>Full description: {book.detailedDescription}</p>
        </>
        
        )}
    </>
    );
};

export default BookCard
