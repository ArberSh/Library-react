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
                            {book.salePrice ? ( 
                                // IF IT EXIST lart

                                // DO THIS
                                <> 
                                <span className='book__price--normal'>${book.originalPrice.toFixed(2)}</span>
                                {book.salePrice.toFixed(2)} 
                                </>
                            ) : (
                               <> {book.originalPrice.toFixed(2)} </> 
                            )}
                           
                        </div>
                    </div>
  )
}
