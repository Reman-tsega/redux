import MainHeader from './MainHeader';
import Cart from '../Cart/Cart'
import Products from '../Shop/Products';
import { useSelector } from 'react-redux';


const Layout = (props) => {
const displayCartItems = useSelector(state => state.ui.cartIsVisible)
  return (
    <>
      <MainHeader />
      {displayCartItems && <Cart/>}
      <Products/>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
