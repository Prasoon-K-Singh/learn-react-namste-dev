import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // const [listOfResData, setListOfResData] = useState([]);
  const [filterListOfResData, setFilterListOfResData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // also declare as

  // const arr = React.useState(resList);

  // const [listOfResData, setListOfResData] = arr;
  // or
  // const listOfResData = arr[0];
  // const setListOfResData = arr[1];

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(REST_DETAIL_API);

  //   const json = await data.json();

  //   setListOfResData(json?.data?.cards?.slice(3) ?? []);
  //   setFilterListOfResData(json?.data?.cards?.slice(3) ?? []);
  // };

  const resList = useRestaurantList();

  useEffect(() => {
    setFilterListOfResData(resList);
  }, [resList]);

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <h1>No network! pls check your internet connection</h1>;
  }

  return resList.length === 0 ? (
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
              const filterSearch = resList.filter((item) =>
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
            const filter = resList.filter(
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
          <Link
            to={"/restaurant-info/" + restaurant.card.card.info.id}
            key={restaurant.card.card.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
