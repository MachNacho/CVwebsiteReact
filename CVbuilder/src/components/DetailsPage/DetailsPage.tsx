import { useState } from "react";
import AchivementsList from "../../data/Achivements/AchivementsList";
import EducationList from "../../data/education/EducationList";
import ExperienceList from "../../data/experience/experincelist";
import ProjectList from "../../data/projects/projectList";
import "./DP.css";

{/*This function returns the component based on the switch case with varible "currentPage".*/}
const Content = () => {
  {/*The use state is used to maintian which page is currently selected*/}
  const [currentPage, setCurrentPage] = useState<string>();
  const renderPageContnet = () => {
    switch (currentPage) {
      case "Edu":
        return <EducationList />;
      case "Proj":
        return <ProjectList />;
      case "Exp":
        return <ExperienceList />;
      case "Ach":
        return <AchivementsList />;
      default:
        return <EducationList />;
    }
  };

  return (
    <>
      <div className="DetailPageDiv">
        <h1 className="HeadingText">Details page</h1>
        <p className="FlavText">More about me</p>
        <nav className="DetailsGuide">
          {/* The buttons will be used to  call a function that changes the current component to the selected component*/}
          <button onClick={() => setCurrentPage("Edu")} >Education</button>
          <button onClick={() => setCurrentPage("Proj")}>Projects</button>
          <button onClick={() => setCurrentPage("Exp")}>Experience</button>
          <button onClick={() => setCurrentPage("Ach")}>Achivements</button>
        </nav>
        {/*Credits @Cameron Noemdo*/}
        <main>{renderPageContnet()}</main>
      </div>
    </>
  );
};

export default Content;
