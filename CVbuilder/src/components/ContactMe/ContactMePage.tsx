import "./CMP.css";
export default function ContactMePage() {
  return (
    <>
      <div>
        <h1 className="HeadingText">Contact page</h1>
        <p className="FlavText">You can contact me</p>
        <div className="ContactContainer">
          <div className="ContactBox">
            <h1>Email Me:</h1>
            <p>Asiphile@gmail.com</p>
          </div>
          <div className="ContactBox">
            <h1>Phone Me:</h1>
            <p>############</p>
          </div>
          <div className="ContactBox">
            <h1>Socials:</h1>
            <ul>
              <li>X</li>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
