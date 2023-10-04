import { useDispatch } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { UiAction } from '../Store/UISlice';

const MainHeader = (props) => {
  const dispatch = useDispatch()
  const toggleHandler =()=>{
    dispatch(UiAction.toggle())

  }
  return (
    <header >
      {/* <h1>ReduxCart</h1> */}
      <nav>
        <ul>
          <li onClick={toggleHandler} >
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
