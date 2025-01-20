import "./hobbies.css";
//FIXME refactor hobbies to json file
export default function HobbiesPage() {
  return (
    <>
      <div>
        <h1 className="HeadingText"> Hobbies page</h1>
        <p className="FlavText">I like to do things such as:</p>
        <div className="HobbyBox">
          <div className="HobbyText">
            <h1>Heading</h1>
            <img src="" alt="Image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              enim, similique fuga omnis necessitatibus quam modi laboriosam
              quod porro eaque consequatur eos non sint quibusdam voluptatem
              voluptates ad fugit maiores.
            </p>
          </div>
          <div className="HobbyText">
            <h1>Heading</h1>
            <img src="" alt="Image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              enim, similique fuga omnis necessitatibus quam modi laboriosam
              quod porro eaque consequatur eos non sint quibusdam voluptatem
              voluptates ad fugit maiores.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
