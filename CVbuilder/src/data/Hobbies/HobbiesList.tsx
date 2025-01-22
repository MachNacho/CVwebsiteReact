import data from "./Hobbies.json";

interface Hobbies {
  title: string;
  description: string;
  image_src: string;
}

const HobbiesList: React.FC = () => {
  const hobbies: Hobbies[] = data;
  return (
    <div className="HobbyBox">
      {hobbies.map((hob, index) => (
        <div key={index} className="HobbyText">
          <h1>{hob.title}</h1>
          <img src={hob.image_src} alt ={hob.title}></img>
          <p>{hob.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HobbiesList;
