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
            <a href="#">Home</a>
          </li>
          <li className="MenuItem">
            <a href="#">Details</a>
          </li>
          <li className="MenuItem">
            <a href="#">Hobbies</a>
          </li>
          <li className="MenuItem">
            <a href="#">Contact me</a>
          </li>
        </ul>
        <div className="CVsection">
          <CVbutton />
        </div>
      </div>
    </>
  );
}
