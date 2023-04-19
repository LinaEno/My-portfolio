import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h2>
        <Link to={'/'}>My Portfolio</Link>
      </h2>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/projects'}>Projects</Link>
      </nav>
    </div>
  );
};

export default Header;
