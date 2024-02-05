import { useState } from "react";
import RestaurantCard from "./RestCard";
import { resList } from "../utils/mockData";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  let listOfRestaurantsJS = [
    {
      info: {
        id: "523613",
        name: "Mcdonald's",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        costForTwo: "₹150 for two",
        cuisines: ["Burgers", "MCD"],
        avgRating: 2.3,
        sla: {
          deliveryTime: 40,
        },
      },
    },
    {
      info: {
        id: "523612",
        name: "KFC",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        costForTwo: "₹250 for three",
        cuisines: ["chicken", "fry"],
        avgRating: 3.3,
        sla: {
          deliveryTime: 40,
        },
      },
    },
  ];

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

          <button
            className="filter-btns"
            onClick={() => {
            
              setListOfRestaurants(resList
              );
            }}
          >
All Data       </button>
       
        
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