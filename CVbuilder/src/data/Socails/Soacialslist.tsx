import data from "./Socials.json";

interface Socials {
  name: string;
  link: string;
  icon_src: string;
}

const SocialList: React.FC = () => {
  const socials: Socials[] = data;
  // TODO finish this code
  return (
    <>
      <div className="Container">
        {socials.map((pro, index) => (
          <a key={index} href={pro.link}>
            <div>{pro.icon_src}</div>
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialList;
