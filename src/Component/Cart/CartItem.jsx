import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { CartActions } from '../Store/CartStore';

const CartItem = (props) => {
  const { title, quantity, total, price, id,description } = props;
  const dispatch = useDispatch()

  const removeHandler =()=>{
    
      dispatch(CartActions.removeItem(id))
  }

  const AddProuctHandler =()=>{
    dispatch(CartActions.addItem({
      id:id,
      title:title,
      price:price,
      quantity:1,
      totalPrice:total,
      description:description
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={AddProuctHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
