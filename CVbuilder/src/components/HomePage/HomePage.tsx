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
          <h1 className="HeadingText">Hi my name is Asiphile Mokweni</h1>
          <p className="MainHomeText">
             I'm a software engineering gradtuate
            from Cape Town
          </p>
          <p className="SecondHomeText">
            I'm currently workin as an Intern for 1Nebula
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ut
            officia, blanditiis modi necessitatibus culpa pariatur cum, quos
            nemo exercitationem facilis! Facere quae illum corrupti nisi! Error
            adipisci in repellendus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ut
            officia, blanditiis modi necessitatibus culpa pariatur cum, quos
            nemo exercitationem facilis! Facere quae illum corrupti nisi! Error
            adipisci in repellendus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ut
            officia, blanditiis modi necessitatibus culpa pariatur cum, quos
            nemo exercitationem facilis! Facere quae illum corrupti nisi! Error
            adipisci in repellendus!
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
