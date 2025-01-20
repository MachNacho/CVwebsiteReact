import EducationList from "../../data/education/EducationList";
import ExperienceList from "../../data/experience/experincelist";

export default function DetailsPage() {
  return (
    <>
      <div className="DetailPageDiv">
        <h1 className="HeadingText">Details page</h1>
        <p className="FlavText">More about me</p>
        <div className="DetailBox">
          <h1>Education:</h1>
          <EducationList />
        </div>
        <div className="DetailBox">
          <h1>Projects:</h1>
          <ul>
            <li>ATM project</li>
            <li>Quiz mobile app</li>
            <li>MVC storefront</li>
            <li>.net Web api + web front</li>
            <li>PHP DB admin application</li>
          </ul>
        </div>
        <div className="DetailBox">
          <h1>Experience:</h1>
          <ExperienceList />
          <div></div>
        </div>
        <div className="DetailBox">
          <h1>Achivments:</h1>
          <ul>
            <li>Gold computer olympiad </li>
            <li>Top Athlete HS </li>
          </ul>
        </div>
      </div>
    </>
  );
}
