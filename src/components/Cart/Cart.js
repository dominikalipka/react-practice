import classes from "./Cart.module.css";
import Modal from "../UI/Modal";


const Cart = (props) => {
  const cartItems = <ul className={classes["cart-items"]}></ul>;

  return (
    <Modal onClose={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>...</span>
      </div>
      <div>
        <button className={classes["button--alt"]}onClick={props.hideCartHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
