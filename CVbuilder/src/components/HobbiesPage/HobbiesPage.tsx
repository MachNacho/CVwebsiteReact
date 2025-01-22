import HobbiesList from "../../data/Hobbies/HobbiesList";
import "./hobbies.css";
export default function HobbiesPage() {
  return (
    <>
      <div>
        <h1 className="HeadingText"> Hobbies page</h1>
        <p className="FlavText">I like to do things such as:</p>
        <HobbiesList />
      </div>
    </>
  );
}
