import React, { FC, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

interface Killer {
  name: string;
  killer_image: string;
  user_selected_status: boolean;
}
interface KillerPerk extends Perk {
  name: string;
  perks_image: string;
  user_selected_status: boolean;
}

interface Survivor {
  name: string;
  survivor_image: string;
  user_selected_status: boolean;
}

interface SurvivorPerk extends Perk {
  name: string;
  perks_image: string;
  user_selected_status: boolean;
}

interface Perk {
  posts: { [key: string]: { name: string } };
}

const Roulette: FC = () => {
  const [killers, setKillers] = useState<Killer[]>([]);
  const [survivors, setSurvivors] = useState<Survivor[]>([]);
  const [killersPerks, setKillersPerks] = useState<KillerPerk[]>([]);
  const [survivorsPerks, setSurvivorsPerks] = useState<SurvivorPerk[]>([]);

  useEffect(() => {
    const userHash = Cookies.get("userHash");
    if (userHash) {
      const apiUrlWithUserHash = `https://dbd-rest-api.eremenko.top/wp-json/get/v1/custom-posts?post_type=post&page-type=roulette&twitch-user-login-hash=${userHash}`;

      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrlWithUserHash);
          setKillers(response.data.response["killer-data"]);
          setSurvivors(response.data.response["survivor-data"]);
          setKillersPerks(response.data.response["killer-perks-data"]);
          setSurvivorsPerks(response.data.response["survivor-perks-data"]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, []);

  return <div></div>;
};

export default Roulette;
