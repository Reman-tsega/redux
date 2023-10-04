import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authAction } from './Store/AuthStore';
import { Link } from 'react-router-dom';

const Header = () => {
    const isAuth = useSelector(state => state.auth.isLogedIn)
    const dispatch = useDispatch()

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <Link to='/'>
            My Products
            </Link>
          </li>
          <li>
            <Link to='/sales'>
            My Sales
            </Link>
          </li>
          <li>
            <button onClick={()=>dispatch(authAction.logOut())}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;