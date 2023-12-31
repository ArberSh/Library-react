import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

export default function BookInfo({ books,addToCart,cart }) {
  const {id} = useParams();
  const book = books.find((book) => +book.id === +id)
  const [added,setAdded] = useState(false)

  function addBookToCart(book){
    addToCart(book)
  }

  function bookExistOnCart(){
    return cart.find(book => book.id === +id)
  }
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            
            <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
              </Link>
              <div className="book__selected--top">
              <div className="book__selected">
                <figure className="book__selected--figure">
                  <img
                  style={{objectFit: 'contain'}}
                    src={book.url}
                  ></img>
                </figure>
                <div className="book__selected--description">
                  <h2 className="book__selected--title">
                    {book.title}
                  </h2>
                  <Rating rating={book.rating} />
                  <div className="book__selected--price">
                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                  </div>
                  <div className="book__summary">
                    <div className="book__selected--title">Summary</div>
                      <p className="book__summary__para" style={{fontSize: '18px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliquas.Lorem ipsum dolor sit amet.
                      </p>
                      <p style={{fontSize: '18px'}} className="book__summary__para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. 
                      </p>
                  </div>
                  {
                  bookExistOnCart() 
                  ? (
                    <Link to={`/cart`} className="book__link">
                      <button className="btn">Checkout</button>
                    </Link>
                  ) : (
                  
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                  
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="books__container">
            <div className="row">
              <div className="books__selected--top">
                <h2 className="book__selected--title">
                  Recommended Books
                </h2>
              </div>
              <div className="books">
              {
                books
                .filter(book => book.rating === 5 && +book.id !== +id)
                .slice(0,4)
                .map(book => <Book book={book} key={book.id} />)
              }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
