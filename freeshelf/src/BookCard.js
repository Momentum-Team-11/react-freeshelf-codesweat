import React, { useState } from "react";
import './styles.css'
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import placeholder  from './photo-placeholder.png'


// todo for today
// need to add null images and information for when there is nothing provide
// need to have more information change to less information
// need to change button to filled in carrot arrow

const BookCard = (props) => {
    const {book} = props
    const [isExpanded, setIsExpanded] = useState(false)

    const getCaret = () => {
        if (isExpanded) {
            return (
                <>
                <FontAwesomeIcon icon={faCaretDown} /> Less Information
                </>
            )
        }

        return (
            <>
             <FontAwesomeIcon icon={faCaretRight} /> More Information
            </>
        )
    }

 // add aria-expanded attribute to the div that contains your
 // expanded information
    return (
    <div className="flex-container box is-flex justify-content align-content is-align-items-space-evenly">
        <div>
        <h3 className="title is-3">{book.title}</h3>
        <h5 className="subtitle is-5">{book.author}</h5>
        <p>{book.shortDescription}</p>
        <a onClick={() => { 
            setIsExpanded(!isExpanded);
            console.log("button clicked!")
        }}>
        {getCaret()}
        </a>
        </div>
        <figure className="image is-128x128">
        <img onError={(event) => event.target.src = `${placeholder}`} className="is-square" src={book.coverImageUrl}></img>
        </figure>
        <div aria-expanded={isExpanded} >
        {isExpanded && (
            <>
            <a href={book.url}>URL: {book.url}</a>
            <p>Publisher: {book.publisher || "Information Not Available"}</p>
            <p>Publication Date: {book.publicationDate || "Information Not Available"}</p>
            <p>Full description: {book.detailedDescription}</p>
            </>
        )}
    </div>
    </div>
    );
};

export default BookCard
