import { Link } from 'react-router-dom';
import '../App.css';

// Adapted from: https://codepen.io/doytch/pen/Kyypba

const Navbar = () => (
  <header className='navbar'>
    {/* <div className='navbar-title navbar-item'>
      <li>
        <Link className='nav-link' to='/'>
          Twilight Zone API
        </Link>
      </li>
    </div> */}
    <div className='navbar-title navbar-item'>
      <li>
        <span>The Twilight Zone API</span>
      </li>
    </div>
    <ul>
      <div className='navbar-item'>
        <li>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
      </div>
      {/* <div className='navbar-item'>
        <li>
          <a className='nav-link' href='#docs'>
            Docs
          </a>
        </li>
      </div>
      <div className='navbar-item'>
        <li>
          <a className='nav-link' href='#resources'>
            Resources
          </a>
        </li>
      </div> */}
      <div className='navbar-item'>
        <li>
          <Link className='nav-link' to='/about'>
            About
          </Link>
        </li>
      </div>
      {/* <div className='navbar-item'>
        <li>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
        </li>
      </div> */}
    </ul>

    {/* <a className='nav-link' href='#top'>
        Home
      </a>
    </div>
    <div className='navbar-item'>
      <a className='nav-link' href='#docs'>
        Docs
      </a>
    </div>
    <div className='navbar-item'>
      <a className='nav-link' href='#resources'>
        Resources
      </a>
    </div>
    <div className='navbar-item'>
      <a className='nav-link' href='#resources'>
        About
      </a>
    </div> */}
  </header>
);

export default Navbar;
// import '../App.css';

// // Adapted from: https://codepen.io/doytch/pen/Kyypba

// const Navbar = () => (
//   <header className='navbar'>
// <div className='navbar-title navbar-item'>
//   <a className='nav-link' href='#top'>
//     Twilight Zone API
//   </a>
// </div>
//     <div className='navbar-item'>
//       <a className='nav-link' href='#docs'>
//         Docs
//       </a>
//     </div>
//     <div className='navbar-item'>
//       <a className='nav-link' href='#resources'>
//         Resources
//       </a>
//     </div>
//   </header>
// );

// export default Navbar;
