import React, { useEffect, useState } from "react";
import axios from "axios";

const RouletteFetch = () => {
  const [killers, setKillers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dbd-rest-api.eremenko.top/wp-json/get/v1/custom-posts?post_type=post&page-type=roulette"
        );

        const formattedKillers = response.data.response["killer-data"].map(
          (killer: { killer_image: string; name: string }) => ({
            image: killer.killer_image,
            text: killer.name,
          })
        );
        setKillers(formattedKillers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(killers);
  return null;
};

export default RouletteFetch;
