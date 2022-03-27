import React, { useState } from "react";
import './styles.css'
import 'bulma/css/bulma.min.css';


// todo for today
// need to add null images and information for when there is nothing provide
// need to have more information change to less information
// need to change button to filled in carrot arrow

const BookCard = (props) => {
    const {book} = props
    const [isExpanded, setIsExpanded] = useState(false)
    return (
    <div class="box">
    <>
        <h3 class="title is-3">{book.title}</h3>
        <h5 class="subtitle is-5">{book.author}</h5>
        <p>{book.shortDescription}</p>
        <figure class="image is-128x128">
        <img class="is-square" src={book.coverImageUrl} alt={book.shortDescription}></img>
        </figure>
        <i class="fas fa-solid fa-caret-right" onClick={() => { 
            setIsExpanded(!isExpanded);
            console.log("button clicked!")
        }}
        >
        More Information
        </i>
        {isExpanded && (
        <>
            <p>URL: {book.url}</p>
            <p>Publisher: {book.publisher || "Information Not Available"}</p>
            <p>Publication Date: {book.publicationDate || "Information Not Available"}</p>
            <p>Full description: {book.detailedDescription}</p>
        </>
        
        )}
    </>
    </div>
    );
};

export default BookCard
