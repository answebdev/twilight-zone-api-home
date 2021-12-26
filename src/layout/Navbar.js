import '../App.css';

// Adapted from: https://codepen.io/doytch/pen/Kyypba

const Navbar = () => (
  <header className='navbar'>
    <div className='navbar-title navbar-item'>
      <a className='nav-link' href='#top'>
        Twilight Zone API
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
  </header>
);

export default Navbar;

// const NavBar = () => (
//   <header className='navbar'>
//     <div className='navbar__title navbar__item'>Cutco</div>
//     <div className='navbar__item'>About Us</div>
//     <div className='navbar__item'>Contact</div>
//     <div className='navbar__item'>Help</div>
//   </header>
// );

// const Nav = () => (
//   <div>
//     <NavBar />
//   </div>
// );

// export default Nav;
