import React from 'react'

export default function Cart() {
  return (
    <div id='books__body'>
        <main id='books__main'>
            <div className='books__container'>
                <div className='book__selected--top'>
                    <h2 className='cart__title'>Cart</h2>
                </div>
                <div className='cart'>
                    <div className='cart__header'>
                        <span className='cart__book'>Book</span>
                        <span className='cart__quantity'>Quantity</span>
                        <span className='cart__total'>Price</span>
                    </div>
                    <div className='cart__body'>
                        <div className='cart__item'>
                            <div className='cart__book'>
                                <img src='https://covers.openlibrary.org/b/id/8091016-L.jpg' className='cart__book--img' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
