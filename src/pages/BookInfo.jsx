import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

export default function BookInfo({ books }) {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
              </Link>
              <Link to="/books">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
              <div className="book__selected">
                <figure className="book__selected--figure">
                  <img
                  style={{objectFit: 'contain'}}
                    src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                  ></img>
                </figure>
                <div className="book__selected--description">
                  <h2 className="book__selected--title">
                    Crack the coding interview
                  </h2>
                  <Rating rating="4.5" />
                  <div className="book__selected--price">
                    <Price originalPrice={50} salePrice={20} />
                  </div>
                  <div className="book__summary">
                    <div className="book__summary--title">Summary</div>
                    <div className="book__summary__para">
                      <p style={{fontSize: '16px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
