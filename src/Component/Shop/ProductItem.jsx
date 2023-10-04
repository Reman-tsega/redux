import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { CartActions } from '../Store/CartStore';

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch()
  const AddToCartHandler =()=>{
    dispatch(CartActions.addItem({
      id:id,
      title:title,
      quantity:1,
      price:price,
      desc : description
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={AddToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
