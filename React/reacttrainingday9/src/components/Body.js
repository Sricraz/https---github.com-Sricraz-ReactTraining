import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // Conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
    
      {listOfRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="search-box"
                value={searchText}
                onChange={(e) => setSearchText(e?.target?.value)}
              />
              <button
                className="filter-btn"
                onClick={() => {
                
                  setFilteredRestaurants(
                    listOfRestaurants.filter((res) =>
                      res.info?.name
                        ?.toLowerCase()
                        .includes(searchText.toLowerCase())
                    )
                  );
                }}
                
              >
                Search
              </button>
              <button className="filter-btns"

                onClick={() => {
                  getData();

                }}
              >
                Refresh
              </button>
            </div>
            <button
              className="filter-btn-btn"
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
            {filteredRestaurants.map((resObj) => (
              <RestaurantCard resData={resObj} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};


export default Body;