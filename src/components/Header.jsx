import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="headerNav">
          <h2>
            <NavLink to={'/'} className="logo">
              Portfolio
            </NavLink>
          </h2>
          <nav className="nav">
            <NavLink to={'/'} className="nav_link">
              Home
            </NavLink>
            {/* <Link to={'/about'} className="nav_link">
              About
            </Link> */}
            <NavLink to={'/projects'} className="nav_link">
              Projects
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
