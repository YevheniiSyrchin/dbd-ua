export const fetchSurvivors = async () => {
  try {
    const response = await fetch(
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/custom-posts?post_type=post&page-type=roulette"
    );
    const data = await response.json();

    const survivorData = data?.response?.["survivor-data"];

    if (survivorData && Array.isArray(survivorData)) {
      return survivorData;
    } else {
      console.error("Недійсний формат відповіді API:", data);
      return [];
    }
  } catch (error) {
    console.error("Помилка отримання даних з API:", error);
    return [];
  }
};

export const createSurvivorsArray = (data: any) => {
  return data.map((item: any) => ({
    image: item.survivor_image,
    text: item.name,
  }));
};

const survivorsData = await fetchSurvivors();
const survivors = createSurvivorsArray(survivorsData);

export default survivors;
