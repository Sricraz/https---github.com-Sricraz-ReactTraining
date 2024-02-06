import { useState, useEffect } from "react";
import RestaurantCard from "./RestCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./ShimmerUI";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

 

  const fetchData = async () => {
    try{
    const data = await fetch(SWIGGY_URL);
    const dataJSON = await data.json();

    console.log("dataJSON", dataJSON);
    

    setListOfRestaurants(
      dataJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    }catch (err) {
      console.log('err',err);
    }
  };

  console.log("Body called");

  useEffect(() => {
    fetchData();
  }, []);

  if (listOfRestaurants.length === 0) {
    return <Shimmer row={5} col={5} />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info?.avgRating > 4)
            );
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resObj) => (
          <RestaurantCard resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;