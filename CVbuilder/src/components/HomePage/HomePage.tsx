import "./HP.css";
import getImageUrl from "/images/ASI-image.jpg";
export default function HomePage() {
  return (
    <>
      <div className="HomePage">
        <div className="HeadImage">
          <ProfilePic value={getImageUrl} />
        </div>
        <div className="HeadingContainer">
          <h1 className="HeadingText">Home page</h1>
          <p className="MainHomeText">
            Hi my name is Asiphile Mokweni, I'm a software engineering gradtuate
            from Cape Town
          </p>
          <p className="SecondHomeText">
            I'm currently workin as an Intern for 1Nebula
          </p>
        </div>
      </div>
    </>
  );
}

// This function is used to load the image from the prop
function ProfilePic({ value }: { value: string }) {
  return <img src={value} className="profilePic"></img>;
}
