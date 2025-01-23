import { Link } from "react-router-dom";
import "./nav.css";
// This is the navigation header that will sit atop each page
export default function NavigationHeader() {
  return (
    <>
      <div className="navbar">
        <ul className="nav-menu">
          <li className="MenuItem">
            {/* This is links to route to each page spcified on the app.tsx file */}
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
            {/* This anchor tag allows for users to download the cv which is stored in a folder in the project */}
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
