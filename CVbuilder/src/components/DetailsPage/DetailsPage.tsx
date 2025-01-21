import AchivementsList from "../../data/Achivements/AchivementsList";
import EducationList from "../../data/education/EducationList";
import ExperienceList from "../../data/experience/experincelist";
import ProjectList from "../../data/projects/projectList";
import "./DP.css";
export default function DetailsPage() {
  return (
    <>
      <div className="DetailPageDiv">
        <h1 className="HeadingText">Details page</h1>
        <p className="FlavText">More about me</p>
        <div className="DetailBox">
          <h1 className="DetailTopicHead">Education:</h1>
          <EducationList />
        </div>
        <hr />
        <div className="DetailBox">
          <h1 className="DetailTopicHead">Projects:</h1>
          <ProjectList />
        </div>
        <hr />
        <div className="DetailBox">
          <h1 className="DetailTopicHead">Experience:</h1>
          <ExperienceList />
          <div></div>
        </div>
        <hr />
        <div className="DetailBox">
          <h1 className="DetailTopicHead">Achivments:</h1>
          <AchivementsList />
        </div>
      </div>
    </>
  );
}
