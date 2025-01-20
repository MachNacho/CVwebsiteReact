import { Link } from "react-router-dom";
import "./nav.css";

function SaveCV() {
  console.log("Save");
}
function DownloadCV() {
  console.log("Download");
}
function CVbutton() {
  return (
    <>
      <button onClick={SaveCV}>Uplaod CV</button>
      <button onClick={DownloadCV}>Download CV</button>
    </>
  );
}
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
        </ul>
        <div className="CVsection">
          <CVbutton />
        </div>
      </div>
    </>
  );
}
