import React from "react";
import data from "./ACH.json";

interface Achievement {
  name: string;
  dateAcquired: string;
  location: string;
}

const AchivementsList: React.FC = () => {
  const achievments: Achievement[] = data;

  return (
    <>
      <h1 className="DetailTopicHead">Achivments:</h1>
      <div className="Container">
        {achievments.map((ach, index) => (
          <div key={index} className="DetBox">
            <h3 className="subHeadingDetails">{ach.name}</h3>
            <p>
              Acquired: {ach.dateAcquired} <br />
              Location: {ach.location}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AchivementsList;
