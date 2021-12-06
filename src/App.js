import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      { cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} hideCartHandler={hideCartHandler}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
