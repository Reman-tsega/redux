import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DummyProduct =[
    {
      id:'p1',
      title:"music 1",
      price:5,
      description:"first book"

  },
    {
      id:'p2',
      title:"music 2",
      price:15,
      description:"2nd book"

  },
]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProduct.map(product=>
        <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        />
        )}
      </ul>
    </section>
  );
};

export default Products;
