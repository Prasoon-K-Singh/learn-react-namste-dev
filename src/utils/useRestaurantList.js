import { useEffect, useState } from "react";
import { REST_DETAIL_API } from "./constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_DETAIL_API);

    const json = await data.json();

    setResList(json?.data?.cards?.slice(3) ?? []);
  };

  return resList;
};

export default useRestaurantList;
