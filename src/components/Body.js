import { useState, useEffect } from "react";
import RestaurantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResData, setListOfResData] = useState([]);
  const [filterListOfResData, setFilterListOfResData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // also declare as

  // const arr = React.useState(resList);

  // const [listOfResData, setListOfResData] = arr;
  // or
  // const listOfResData = arr[0];
  // const setListOfResData = arr[1];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.46310&lng=80.34790&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    setListOfResData(json?.data?.cards?.slice(3) ?? []);
    setFilterListOfResData(json?.data?.cards?.slice(3) ?? []);
  };

  return listOfResData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filterSearch = listOfResData.filter((item) =>
                item.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterListOfResData(filterSearch);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filter = listOfResData.filter(
              (item) => item.card.card.info.avgRating > 4.1
            );
            setFilterListOfResData(filter);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filterListOfResData.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
