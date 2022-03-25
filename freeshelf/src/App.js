import {books} from './books'
import React, { useState } from 'react';
import BookCard from './BookCard';


function App () {
    console.log(books)
    return ( 
    <div>
        {books.map((book)=> {
            return (
                <BookCard book={book}/>
            )
        })}
    </div>
)
}



export default App

