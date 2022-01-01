import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <header className='navbar'>
    <div className='navbar-title navbar-item'>
      <div>
        <span>The Twilight Zone API</span>
      </div>
    </div>
    <ul className='list-container'>
      <li className='navbar-item'>
        <Link className='nav-link' to='/'>
          Home
        </Link>
      </li>
      <li className='navbar-item'>
        <Link className='nav-link' to='/about'>
          About
        </Link>
      </li>
    </ul>
  </header>
);

export default Navbar;
