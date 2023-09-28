import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Book() {
  return (
    <div className='book'>
                        <a href=''>
                            <figure className='book__img--wrapper'>
                                <img className='book__img' src='https://covers.openlibrary.org/b/id/8091016-L.jpg'/>
                            </figure>
                        </a>
                        <div className='book__title'>
                            <a href='/' className='book__title--link'>
                                Atomic Habits
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
                            <span className='book__price--normal'>$15.00</span>
                            $10.00
                        </div>
                    </div>
  )
}
