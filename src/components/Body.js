import React from "react";
import RestaurantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfResData, setListOfResData] = React.useState(resList);

  // also declare as

  // const arr = React.useState(resList);

  // const [listOfResData, setListOfResData] = arr;
  // or
  // const listOfResData = arr[0];
  // const setListOfResData = arr[1];

  return (
    <div className="body">
      <div className="search-container">
        <button
          onClick={() => {
            const filter = listOfResData.filter(
              (item) => item.card.card.info.avgRating > 4.2
            );
            setListOfResData(filter);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfResData.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
        <RestaurantCard resData={resList[0]} />
      </div>
    </div>
  );
};

export default Body;
