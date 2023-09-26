import React, { useEffect, useState } from "react";
import axios from "axios";

interface Killer {
  name: string;
  killer_image: string;
}
interface KillerPerk extends Perk {
  name: string;
  perks_image: string;
}

interface Survivor {
  name: string;
  survivor_image: string;
}

interface SurvivorPerk extends Perk {
  name: string;
  perks_image: string;
}

interface Perk {
  name: string;
  perks_image: string;
  posts: { [key: string]: { name: string } };
}

const KillerComponent = () => {
  const [killers, setKillers] = useState<Killer[]>([]);
  const [survivors, setSurvivors] = useState<Survivor[]>([]);
  const [killersPerks, setKillersPerks] = useState<KillerPerk[]>([]);
  const [survivorsPerks, setSurvivorsPerks] = useState<SurvivorPerk[]>([]);
  const [activeGallery, setActiveGallery] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [filteredKillers, setFilteredKillers] = useState<Killer[]>([]);
  const [filteredSurvivors, setFilteredSurvivors] = useState<Survivor[]>([]);
  const [filteredKillerPerks, setFilteredKillerPerks] = useState<KillerPerk[]>(
    []
  );
  const [filteredSurvivorPerks, setFilteredSurvivorPerks] = useState<
    SurvivorPerk[]
  >([]);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);

  const handleGalleryChange = (gallery: string) => {
    setActiveGallery(gallery);
  };

  const handleSearch = (gallery: string) => {
    const searchKey = search.toLowerCase();
    if (gallery === "killers") {
      const filtered = killers.filter((killer) =>
        killer.name.toLowerCase().includes(searchKey)
      );
      setFilteredKillers(filtered);
    } else if (gallery === "survivors") {
      const filtered = survivors.filter((survivor) =>
        survivor.name.toLowerCase().includes(searchKey)
      );
      setFilteredSurvivors(filtered);
    } else if (gallery === "killerPerks") {
      const filtered = killersPerks.filter((perk) => {
        const perkNameMatches = perk.name.toLowerCase().includes(searchKey);
        const characterNameMatches = Object.values(perk.posts).some((post) =>
          post.name.toLowerCase().includes(searchKey)
        );
        return perkNameMatches || characterNameMatches;
      });
      setFilteredKillerPerks(filtered);
    } else if (gallery === "survivorPerks") {
      const filtered = survivorsPerks.filter((perk) => {
        const perkNameMatches = perk.name.toLowerCase().includes(searchKey);
        const characterNameMatches = Object.values(perk.posts).some((post) =>
          post.name.toLowerCase().includes(searchKey)
        );
        return perkNameMatches || characterNameMatches;
      });
      setFilteredSurvivorPerks(filtered);
    }
  };

  const handleItemClick = (itemName: string) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemName)) {
        return prevSelectedItems.filter((item) => item !== itemName);
      } else {
        return [...prevSelectedItems, itemName];
      }
    });
  };

  const handleSave = () => {
    // Потім замінити відправкою масиву на серв абощо
    console.log("Selected Items:", selectedItems);
  };

  useEffect(() => {
    handleSearch(activeGallery);
  }, [search, activeGallery, killers, survivors, killersPerks, survivorsPerks]);

  useEffect(() => {
    const apiUrl =
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/custom-posts?post_type=post&page-type=roulette";

    const fetchKillers = async () => {
      try {
        const response = await axios.get(apiUrl);
        setKillers(response.data.response["killer-data"]);
      } catch (error) {
        console.error("Error fetching killer data:", error);
      }
    };

    fetchKillers();
  }, []);

  useEffect(() => {
    const apiUrl =
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/custom-posts?post_type=post&page-type=roulette";

    const fetchSurvivors = async () => {
      try {
        const response = await axios.get(apiUrl);
        setSurvivors(response.data.response["survivor-data"]);
      } catch (error) {
        console.error("Error fetching killer data:", error);
      }
    };

    fetchSurvivors();
  }, []);

  useEffect(() => {
    const apiUrl =
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/custom-posts?post_type=post&page-type=roulette";

    const fetchKillersPerks = async () => {
      try {
        const response = await axios.get(apiUrl);
        setKillersPerks(response.data.response["killer-perks-data"]);
      } catch (error) {
        console.error("Error fetching killer data:", error);
      }
    };

    fetchKillersPerks();
  }, []);

  useEffect(() => {
    const apiUrl =
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/custom-posts?post_type=post&page-type=roulette";

    const fetchSurvivorsPerks = async () => {
      try {
        const response = await axios.get(apiUrl);
        setSurvivorsPerks(response.data.response["survivor-perks-data"]);
      } catch (error) {
        console.error("Error fetching killer data:", error);
      }
    };

    fetchSurvivorsPerks();
  }, []);

  return (
    <main className="accountContainer toCenter">
      <div className="gallery-buttons">
        <button
          className={`font-Roboto font-white fz-medium ${
            activeGallery === "killers" ? "active" : ""
          }`}
          onClick={() => {
            handleGalleryChange("killers");
            setIsDescriptionVisible(false);
          }}
        >
          Killers
        </button>
        <button
          className={`font-Roboto font-white fz-medium ${
            activeGallery === "survivors" ? "active" : ""
          }`}
          onClick={() => {
            handleGalleryChange("survivors");
            setIsDescriptionVisible(false);
          }}
        >
          Survivors
        </button>
        <button
          className={`font-Roboto font-white fz-medium ${
            activeGallery === "killerPerks" ? "active" : ""
          }`}
          onClick={() => {
            handleGalleryChange("killerPerks");
            setIsDescriptionVisible(false);
          }}
        >
          Killer Perks
        </button>
        <button
          className={`font-Roboto font-white fz-medium ${
            activeGallery === "survivorPerks" ? "active" : ""
          }`}
          onClick={() => {
            handleGalleryChange("survivorPerks");
            setIsDescriptionVisible(false);
          }}
        >
          Survivor Perks
        </button>
      </div>

      {isDescriptionVisible && (
        <div className="description font-Roboto font-white fz-medium">
          <p>
            Оберіть відсутніх Персонажів/Навички та не забудьте натистуни
            "Зберегти".
          </p>
        </div>
      )}

      {activeGallery === "killers" && (
        <div className="toCenter">
          <input
            type="text"
            placeholder="Пошук..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />
          <div className="gallery">
            {filteredKillers.length > 0 &&
              filteredKillers.map((killer) => (
                <div
                  key={killer.name}
                  className={`item font-Roboto font-white fz-small ${
                    selectedItems.includes(killer.name) ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick(killer.name)}
                >
                  <img src={killer.killer_image} alt={killer.name} />
                  <h3>{killer.name}</h3>
                </div>
              ))}
          </div>
        </div>
      )}

      {activeGallery === "survivors" && (
        <div className="toCenter">
          <input
            type="text"
            placeholder="Пошук..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />
          <div className="gallery">
            {filteredSurvivors.length > 0 &&
              filteredSurvivors.map((survivor) => (
                <div
                  key={survivor.name}
                  className={`item font-Roboto font-white fz-small ${
                    selectedItems.includes(survivor.name) ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick(survivor.name)}
                >
                  <img src={survivor.survivor_image} alt={survivor.name} />
                  <h3>{survivor.name}</h3>
                </div>
              ))}
          </div>
        </div>
      )}

      {activeGallery === "killerPerks" && (
        <div className="toCenter">
          <input
            type="text"
            placeholder="Пошук..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />
          <div className="gallery">
            {filteredKillerPerks.length > 0 &&
              filteredKillerPerks.map((perk) => (
                <div
                  key={perk.name}
                  className={`item font-Roboto font-white fz-small ${
                    selectedItems.includes(perk.name) ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick(perk.name)}
                >
                  <img src={perk.perks_image} alt={perk.name} />
                  <h3>{perk.name}</h3>
                </div>
              ))}
          </div>
        </div>
      )}

      {activeGallery === "survivorPerks" && (
        <div className="toCenter">
          <input
            type="text"
            placeholder="Пошук..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />
          <div className="gallery">
            {filteredSurvivorPerks.length > 0 &&
              filteredSurvivorPerks.map((perk) => (
                <div
                  key={perk.name}
                  className={`item font-Roboto font-white fz-small ${
                    selectedItems.includes(perk.name) ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick(perk.name)}
                >
                  <img src={perk.perks_image} alt={perk.name} />
                  <h3>{perk.name}</h3>
                </div>
              ))}
          </div>
        </div>
      )}

      {activeGallery && (
        <button
          className="saveButton font-Roboto fz-medium"
          onClick={handleSave}
        >
          Зберегти
        </button>
      )}
    </main>
  );
};

export default KillerComponent;
