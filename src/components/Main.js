import Image from "./Image";
import "./Main.css";
import Video from "./Video";

const Main = (props) => {
  const { data } = props;

  return (
    <div className="main-container">
      <h1>{data.title}</h1>
      {data.media_type == "image" ? (
        <Image url={data.url}></Image>
      ) : (
        <Video url={data.url}></Video>
      )}
      <div className="details-container">
        <p>{data.copyright}</p>
        <p>{data.date}</p>
      </div>
      <p>{data.explanation}</p>
    </div>
  );
};
export default Main;
