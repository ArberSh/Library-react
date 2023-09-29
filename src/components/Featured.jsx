import React from 'react'
import Book from './ui/Book'
import {books} from '../data'

export default function Featured() {
    console.log(books);
    console.log(books.filter(book => book.rating === 5));
  return (
    <section id='features'>
        <div className='container'>
            <div className='row'>
                <h2 className='section__title'>
                    Featured <span className='purple'>Books</span>
                </h2>
                <div className='books'>
                    {books
                    .filter(book => book.rating === 5)
                    .slice(0, 4)
                    .map(book => <Book book={book}/>)}
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                </div>
            </div>
        </div>
    </section>
  )
}
