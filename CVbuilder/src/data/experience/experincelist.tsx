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
    <>
      <h1 className="DetailTopicHead">Experience:</h1>
      <div className="Container">
        {experiences.map((exp, index) => (
          <div key={index} className="DetBox">
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
            <Iconpic value={exp.imageSrc} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceList;

function Iconpic({ value }: { value: string }) {
  return <img src={value} className="iconPic"></img>;
}
