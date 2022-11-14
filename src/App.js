import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakertyItem from './components/BakeryItem';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, updateCart] = useState({})

  let totalCost = 0;
    Object.keys(cart).forEach((key) => {
      totalCost = totalCost + (cart[key].price);
      totalCost = Math.round(totalCost * 100) / 100
    })

  const newCartItems = (newItem) => {
    const updatedCart = {...cart};
    if (typeof updatedCart[newItem.name] == 'undefined') {
      updatedCart[newItem.name] = {quant: 1, price: newItem.price}
    }
    else {
      updatedCart[newItem.name].quant += 1;
      updatedCart[newItem.name].price += newItem.price;
    }
    updateCart(updatedCart)
  }

  

  return (
    <div className="App">
      <div className="BakeryGoods">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakertyItem newBakeryItem={item} onButtonClick={ newCartItems } />
        ))}
      </div>
      <div className="Cart">
        <h2>Your Cart</h2>
        {Object.keys(cart).map((key, index) => {
          const quant = cart[key].quant
          return (
            <p>{key} x {quant} @ ${cart[key].price}</p>
          )
        })}
        {/* TODO: render a list of items in the cart */}
        <p>Total: ${totalCost}</p>
      </div>
    </div>
  );
}

export default App;
