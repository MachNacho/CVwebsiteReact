import data from "./exp.json";

interface Experience {
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  imageSrc: string;
}

const ExperienceList: React.FC = () => {
  const experiences: Experience[] = data;

  return (
    <div>
      {experiences.map((exp, index) => (
        <div key={index}>
          <h2 className="subHeadingDetails">{exp.role}</h2>
          <p>{exp.organisation}</p>
          <p>
            {exp.startDate} - {exp.endDate}
          </p>
          <ul>
            {exp.experiences.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
          <img src={exp.imageSrc} alt={exp.role} style={{ width: "100px" }} />
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
