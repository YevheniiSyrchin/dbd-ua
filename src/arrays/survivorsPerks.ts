export const fetchSurvivorsPerks = async () => {
  try {
    const response = await fetch(
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/custom-posts?post_type=post&page-type=roulette"
    );
    const data = await response.json();

    const survivorPerkData = data?.response?.["survivor-perks-data"];

    if (survivorPerkData && Array.isArray(survivorPerkData)) {
      return survivorPerkData;
    } else {
      console.error("Недійсний формат відповіді API:", data);
      return [];
    }
  } catch (error) {
    console.error("Помилка отримання даних з API:", error);
    return [];
  }
};

export const createSurvivorsPerksArray = (data: any) => {
  return data.map((item: any) => ({
    image: item.perks_image,
    text: item.name,
  }));
};

const survivorsPerksData = await fetchSurvivorsPerks();
const survivorsPerks = createSurvivorsPerksArray(survivorsPerksData);

export default survivorsPerks;
