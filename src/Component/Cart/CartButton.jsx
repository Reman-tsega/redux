import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const totalProducts = useSelector(state=> state.cart.totalAmount)
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalProducts}</span>
    </button>
  );
};

export default CartButton;
