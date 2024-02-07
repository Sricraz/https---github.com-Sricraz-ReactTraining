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
     {/* <h3>{name}</h3>
      <h4>{cuisines?.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4> */}
      <p>{info.name??0}</p>
      <p>{info.avgRating}</p>
    </div>
  );
};
 
export default RestCard;