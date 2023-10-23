import React, { useEffect, useState } from "react";
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
  const [selectAll, setSelectAll] = useState(false);
  const handleGalleryChange = (gallery: string) => {
    const isUserAuthenticated = !!document.cookie.includes("userHash");

    if (!isUserAuthenticated) {
      alert("Необхідна авторизація!");
      return;
    }

    setActiveGallery(gallery);
  };

  const handleSelectAll = () => {
    let allItems: string[] = [];

    if (activeGallery === "killers") {
      allItems = killers.map((killer) => killer.name);
    } else if (activeGallery === "survivors") {
      allItems = survivors.map((survivor) => survivor.name);
    } else if (activeGallery === "killerPerks") {
      allItems = killersPerks.map((perk) => perk.name);
    } else if (activeGallery === "survivorPerks") {
      allItems = survivorsPerks.map((perk) => perk.name);
    }

    setSelectedItems((prevSelectedItems) => {
      const uniqueItems = Array.from(
        new Set([...prevSelectedItems, ...allItems])
      );
      return uniqueItems;
    });
    setSelectAll(true);
  };

  const handleDeselectAll = () => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((item) => {
        return (
          (activeGallery === "killers" &&
            !killers.some((killer) => killer.name === item)) ||
          (activeGallery === "survivors" &&
            !survivors.some((survivor) => survivor.name === item)) ||
          (activeGallery === "killerPerks" &&
            !killersPerks.some((perk) => perk.name === item)) ||
          (activeGallery === "survivorPerks" &&
            !survivorsPerks.some((perk) => perk.name === item))
        );
      })
    );
    setSelectAll(false);
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
      const isItemSelected = prevSelectedItems.includes(itemName);
      if (isItemSelected) {
        return prevSelectedItems.filter((item) => item !== itemName);
      } else {
        return [...prevSelectedItems, itemName];
      }
    });
  };

  useEffect(() => {
    const autoSelectedItems: string[] = [];

    autoSelectedItems.push(
      ...filteredKillers
        .filter((killer) => killer.user_selected_status)
        .map((killer) => killer.name)
    );

    autoSelectedItems.push(
      ...filteredSurvivors
        .filter((survivor) => survivor.user_selected_status)
        .map((survivor) => survivor.name)
    );

    autoSelectedItems.push(
      ...filteredKillerPerks
        .concat(filteredSurvivorPerks)
        .filter((perk) => perk.user_selected_status)
        .map((perk) => perk.name)
    );

    setSelectedItems((prevSelectedItems) => [
      ...prevSelectedItems,
      ...autoSelectedItems,
    ]);
  }, [
    filteredKillers,
    filteredSurvivors,
    filteredKillerPerks,
    filteredSurvivorPerks,
  ]);

  const handleSave = () => {
    const isUserAuthenticated = !!document.cookie.includes("userHash");
    if (!isUserAuthenticated) {
      alert("Необхідна авторизація!");
      return;
    }

    const selectedKillerData = killers
      .filter((killer) => selectedItems.includes(killer.name))
      .map((killer) => ({ name: killer.name }));

    const selectedKillerPerksData = killersPerks
      .filter((perk) => selectedItems.includes(perk.name))
      .map((perk) => ({ name: perk.name }));

    const selectedSurvivorData = survivors
      .filter((survivor) => selectedItems.includes(survivor.name))
      .map((survivor) => ({ name: survivor.name }));

    const selectedSurvivorPerksData = survivorsPerks
      .filter((perk) => selectedItems.includes(perk.name))
      .map((perk) => ({ name: perk.name }));

    let userHash = "";

    if (document.cookie) {
      const userHashCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("userHash="));

      if (userHashCookie) {
        userHash = userHashCookie.split("=")[1];
      }
    }

    const requestData = {
      action: "save_user_account_data_action",
      "user-hash": userHash,
      "killer-data": selectedKillerData,
      "killer-perks-data": selectedKillerPerksData,
      "survivor-data": selectedSurvivorData,
      "survivor-perks-data": selectedSurvivorPerksData,
    };

    console.log("Дані для відправки на сервер:", requestData);

    const apiUrl = "https://dbd-rest-api.eremenko.top/wp-json/get/v1/options";

    const formData = new URLSearchParams();
    formData.append("action", "save_user_account_data_action");
    formData.append("user-hash", userHash);

    for (const killer of selectedKillerData) {
      formData.append("killer-data", JSON.stringify(killer));
    }

    for (const perk of selectedKillerPerksData) {
      formData.append("killer-perks-data", JSON.stringify(perk));
    }

    for (const survivor of selectedSurvivorData) {
      formData.append("survivor-data", JSON.stringify(survivor));
    }

    for (const perk of selectedSurvivorPerksData) {
      formData.append("survivor-perks-data", JSON.stringify(perk));
    }

    console.log(
      "Дані для відправки на сервер (x-www-form-urlencoded):",
      formData.toString()
    );

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const ajaxUrl = data.response.options["ajax-url"];

        fetch(ajaxUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    setIsDescriptionVisible(activeGallery === "");
    handleSearch(activeGallery);
  }, [search, activeGallery, killers, survivors, killersPerks, survivorsPerks]);

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

  return (
    <main className="accountContainer toCenter">
      <div className="gallery-buttons">
        <button
          className={`font-Roboto font-white fz-medium ${
            activeGallery === "killers" ? "active" : ""
          }`}
          onClick={() => {
            handleGalleryChange("killers");
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
          }}
        >
          Survivor Perks
        </button>
      </div>

      {isDescriptionVisible && (
        <div className="description font-Roboto font-white fz-medium">
          <p>
            Оберіть доступних Персонажів/Навички та не забудьте натиснути
            "Зберегти".
          </p>
        </div>
      )}

      {activeGallery === "killers" && (
        <div className="toCenter">
          <div className="accountNav">
            <button
              className="selectButtons font-Roboto fz-medium"
              onClick={handleSelectAll}
            >
              Обрати всіх
            </button>
            <button
              className="selectButtons font-Roboto fz-medium"
              onClick={handleDeselectAll}
            >
              Очистити
            </button>

            <input
              type="text"
              placeholder="Пошук..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="searchInput"
            />
          </div>
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
          <div className="accountNav">
            <button
              className="selectButtons font-Roboto fz-medium"
              onClick={handleSelectAll}
            >
              Обрати всіх
            </button>
            <button
              className="selectButtons font-Roboto fz-medium"
              onClick={handleDeselectAll}
            >
              Очистити
            </button>

            <input
              type="text"
              placeholder="Пошук..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="searchInput"
            />
          </div>
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
          <div className="accountNav">
            <button
              className="selectButtons font-Roboto fz-medium"
              onClick={handleSelectAll}
            >
              Обрати всіх
            </button>
            <button
              className="selectButtons font-Roboto fz-medium"
              onClick={handleDeselectAll}
            >
              Очистити
            </button>

            <input
              type="text"
              placeholder="Пошук..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="searchInput"
            />
          </div>

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
          <div className="accountNav">
            <button
              className="selectButtons font-Roboto fz-medium"
              onClick={handleSelectAll}
            >
              Обрати всіх
            </button>
            <button
              className="selectButtons font-Roboto fz-medium"
              onClick={handleDeselectAll}
            >
              Очистити
            </button>

            <input
              type="text"
              placeholder="Пошук..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="searchInput"
            />
          </div>

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
