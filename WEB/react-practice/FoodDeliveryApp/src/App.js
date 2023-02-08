import React,{useState} from "react";
import MainHeader from "./components/Layout/MainHeader";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";

function App() {
  const [cartVisibility,setVisiblity] = useState(false)

  const showCartHandler = ()=>{
    setVisiblity(true)
  }

  const hideCart = () =>{
    setVisiblity(false)
  }
  return (
    <CartProvider>
      {cartVisibility && <Cart onHideCart={hideCart}/>}
      <MainHeader onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
