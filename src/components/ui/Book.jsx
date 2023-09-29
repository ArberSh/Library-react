import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Book( { book }) {
  return (
    <div className='book'>
                        <a href=''>
                            <figure className='book__img--wrapper'>
                                <img className='book__img' src={book.url}/>
                            </figure>
                        </a>
                        <div className='book__title'>
                            <a href='/' className='book__title--link'>
                                {book.title}
                            </a>
                        </div>
                        <div className='book__ratings'>
                            <FontAwesomeIcon icon="star"/>
                            <FontAwesomeIcon icon="star"/>
                            <FontAwesomeIcon icon="star"/>
                            <FontAwesomeIcon icon="star"/>
                            <FontAwesomeIcon icon="star-half-alt"/>
                        </div>
                        <div className='book__price'>
                            <span className='book__price--normal'>${book.originalPrice}</span>
                            {book.salePrice}
                        </div>
                    </div>
  )
}
