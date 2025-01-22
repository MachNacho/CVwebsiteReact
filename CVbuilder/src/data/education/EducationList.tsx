import React from "react";
import data from "./Edu.json";

interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  grade: string;
  details: string[];
  imageSrc: string;
}

const EducationList: React.FC = () => {
  const education: Education[] = data;

  return (
    <div className="Container">
      {education.map((edu, index) => (
        <div key={index} className="DetBox">
          <h2 className="subHeadingDetails">{edu.degree}</h2>
          <p>
            {edu.institution} ({edu.startDate} - {edu.endDate})
          </p>
          <p>{edu.grade}</p>
          <ul>
            {edu.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
          <img
            src={edu.imageSrc}
            alt={edu.institution}
            style={{ width: "100px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default EducationList;
