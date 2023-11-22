export const fetchKillers = async () => {
  try {
    const response = await fetch(
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/custom-posts?post_type=post&page-type=roulette"
    );
    const data = await response.json();

    const killerData = data?.response?.["killer-data"];

    if (killerData && Array.isArray(killerData)) {
      return killerData;
    } else {
      console.error("Недійсний формат відповіді API:", data);
      return [];
    }
  } catch (error) {
    console.error("Помилка отримання даних з API:", error);
    return [];
  }
};

export const createKillersArray = (data: any) => {
  return data.map((item: any) => ({
    image: item.killer_image,
    text: item.name,
  }));
};

const killersData = await fetchKillers();
const killers = createKillersArray(killersData);

export default killers;
