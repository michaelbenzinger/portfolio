import './Navigation.css';

function Navigation() {
  return (
    <div className='nav__bar'>
      <div className='nav__container contained'>
        <nav>
          {/* <a href='#home'>Home</a> */}
          <a href='#work'>Work</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
