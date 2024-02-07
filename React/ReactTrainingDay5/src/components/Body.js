import RestCard from "./RestCard";
import { resList} from "../utils/constants";
 
 
 
 
const Body = () =>{
    return (
    <div className="body">
        <div className="res-container">
        {/* {listOfRestaurants.map((resObj) => (
          <RestaurantCard resData={resObj} />
        ))} */}
 
        {
          resList.map((res) => (
            <RestCard resData={res}/>
         
          ))}
      </div>
 
    </div>
    );
 };
 
 export default Body;