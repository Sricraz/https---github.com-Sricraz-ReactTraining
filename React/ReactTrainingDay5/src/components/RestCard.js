import { CDN_URL } from "../utils/constants";
 
const RestCard = (props) => {
  const { resData } = props;
  const { info } =
    resData;
  return (
    <div className="res-card">
      <img
        src={`${CDN_URL}/${info?.cloudinaryImageId}`}
        alt="res-logo"
      />
      <div classname="class-root">
          <p>{info.name??0}</p>
          <p>{info.avgRating}</p>
      </div>
    </div>
  );
};
 
export default RestCard;