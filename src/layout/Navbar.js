import { Link } from 'react-router-dom';
import classes from '../styles/Navbar.module.css';

const Navbar = () => (
  <header className={classes.Navbar}>
    <div className={`${classes.NavbarTitle} ${classes.NavbarItem}`}>
      <div>
        <span>The Twilight Zone API</span>
      </div>
    </div>
    <ul>
      <li className={classes.NavbarItem}>
        <Link className={classes.NavLink} to='/'>
          Home
        </Link>
      </li>
      <li className={classes.NavbarItem}>
        <Link className={classes.NavLink} to='/about'>
          About
        </Link>
      </li>
    </ul>
  </header>
);

export default Navbar;
