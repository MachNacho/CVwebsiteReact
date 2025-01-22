import { useState } from "react";
import AchivementsList from "../../data/Achivements/AchivementsList";
import EducationList from "../../data/education/EducationList";
import ExperienceList from "../../data/experience/experincelist";
import ProjectList from "../../data/projects/projectList";
import "./DP.css";
const Content = () => {
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
          <button onClick={() => setCurrentPage("Edu")}>Education</button>
          <button onClick={() => setCurrentPage("Proj")}>Projects</button>
          <button onClick={() => setCurrentPage("Exp")}>Experience</button>
          <button onClick={() => setCurrentPage("Ach")}>Achivements</button>
        </nav>
        <p className="Credit">Credits to Cameron Noemdo</p>
        <main>{renderPageContnet()}</main>
      </div>
    </>
  );
};

export default Content;
