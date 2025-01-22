import { Link } from "react-router-dom";
import "./nav.css";
export default function NavigationHeader() {
  return (
    <>
      <div className="navbar">
        <ul className="nav-menu">
          <li className="MenuItem">
            <Link to="/">Home</Link>
          </li>
          <li className="MenuItem">
            <Link to="/Details">Details</Link>
          </li>
          <li className="MenuItem">
            <Link to="/Hobbies">Hobbies</Link>
          </li>
          <li className="MenuItem">
            <Link to="/ContactMe">Contact Me</Link>
          </li>
          <li className="MenuItem">
            <a href="/file/CV.pdf" download>
              Download CV
            </a>
          </li>
        </ul>
        <div className="CVsection"></div>
      </div>
    </>
  );
}
