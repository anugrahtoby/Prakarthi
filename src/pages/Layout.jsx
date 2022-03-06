import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/LogoAlt.svg';
import '../style/Nav.css';

const Layout = () => {
    return (
      <>
        <nav className="homeNav">
          <ul>
          <li>
              <Link to="/getinvolved">Get Involved</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/"><Logo /></Link>
            </li>
            <li>
              <Link to="/organizations">Organizations</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  };
  
  export default Layout;