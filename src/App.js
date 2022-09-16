// React
import { useState } from 'react';
// Components
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  // Managing cart visibility state here and pass it through props drilling instead of context:
  // Smart choice for Modal Backdrop onClick configurability
  // Fine for HeaderCartButton button onClick since it's just two levels of components

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </>
  );
}

export default App;
