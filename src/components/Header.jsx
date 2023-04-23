import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h2>
        <Link to={'/'} className="logo">
          My Portfolio
        </Link>
      </h2>
      <nav className="nav">
        <Link to={'/'} className="nav_link">
          Home
        </Link>
        <Link to={'/about'} className="nav_link">
          About
        </Link>
        <Link to={'/projects'} className="nav_link">
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Header;
