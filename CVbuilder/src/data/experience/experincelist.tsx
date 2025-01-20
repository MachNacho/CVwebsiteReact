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
        <div key={index}> {exp.role}</div>
      ))}
    </div>
  );
};

export default ExperienceList;
