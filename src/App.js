import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import {books} from "./data"
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
function App() {
  const [cart,setCart] = useState([]);

  function addToCart(book){
    setCart([...cart,{...book, quantity:1}])
}

function changeQuantity(book,quantity){
setCart(
  cart.map((item) => item.id === book.id
    ? {
      ...item,
      quantity: +quantity,
    }
    : item
    )
  );
}

function removeItem(item){
  setCart(cart.filter(book => book.id !== item.id))
}

function numberOfItems(){
  let counter = 0;
  cart.forEach(item => {
    counter += item.quantity
  })
  return counter
}

  useEffect(()=> {
     console.log(cart)
  },[cart])

  return (
    <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()}/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<Books books={books}/>}></Route>
        <Route path="/books/:id" element={<BookInfo cart={cart} books={books} addToCart={addToCart}/>}></Route>
        <Route path="/cart" element={<Cart  cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />}></Route>
       </Routes>
      <Footer/>
    </div>
    </Router>
  );
}
export default App;
// addToCart={addToCart} 