export const fetchKillersPerks = async () => {
  try {
    const response = await fetch(
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/custom-posts?post_type=post&page-type=roulette"
    );
    const data = await response.json();

    const killerPerkData = data?.response?.["killer-perks-data"];

    if (killerPerkData && Array.isArray(killerPerkData)) {
      return killerPerkData;
    } else {
      console.error("Недійсний формат відповіді API:", data);
      return [];
    }
  } catch (error) {
    console.error("Помилка отримання даних з API:", error);
    return [];
  }
};

export const createKillersPerksArray = (data: any) => {
  return data.map((item: any) => ({
    image: item.perks_image,
    text: item.name,
  }));
};

const killersPerksData = await fetchKillersPerks();
const killersPerks = createKillersPerksArray(killersPerksData);

export default killersPerks;
