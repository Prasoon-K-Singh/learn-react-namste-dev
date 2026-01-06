import { useEffect } from "react";
import { REST_INFO_API } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantInfo = () => {
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_INFO_API + resId);

    // cant fetch get status code as 202 from swiggy api
    // status code 202(accepted) => Request accepted, processing later

    // const json = await data?.json();

    // console.log("json", json);
  };

  return (
    <div>
      <h1>Restaurant Name</h1>
      <div>
        <h2>Restaurant Detial</h2>
      </div>
      <div>
        <h2>Menu Item</h2>
      </div>
    </div>
  );
};

export default RestaurantInfo;
