import { Link } from 'react-router-dom';

export function NavBar() {

  return (
    <ul className="navBar">
        <Link to="/">Home</Link>
        <Link to="/AboutMe">About Me</Link>
    </ul>
  );
}
