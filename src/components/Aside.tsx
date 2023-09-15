import React, { FC, useEffect, useState } from "react";
import Axios from "axios";

interface Images {
  background: string;
  ghostFaceImg: string;
  survivors: string;
}

const Aside: FC = () => {
  const [images, setImages] = useState<Images>({
    background: "",
    ghostFaceImg: "",
    survivors: "",
  });

  const fetchImagesFromApi = async () => {
    try {
      const response = await Axios.get(
        "https://dbd-rest-api.eremenko.top/wp-json/get/v1/options"
      );

      const options = response.data.response.options;
      const { image_full, image_left, image_right } =
        options["background-images-main-page"];

      const newImages: Images = {
        background: image_full,
        ghostFaceImg: image_right,
        survivors: image_left,
      };

      const localImages = JSON.parse(localStorage.getItem("images") || "{}");

      if (JSON.stringify(newImages) !== JSON.stringify(localImages)) {
        localStorage.setItem("images", JSON.stringify(newImages));
        setImages(newImages);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    const localImages = JSON.parse(localStorage.getItem("images") || "{}");
    if (localImages && Object.keys(localImages).length > 0) {
      setImages(localImages);
    }

    fetchImagesFromApi();
  }, []);

  return (
    <div>
      <div className="background">
        <img src={images.background} alt="background" />
      </div>
      <img src={images.ghostFaceImg} className="ghostFace" alt="ghostFace" />
      <img src={images.survivors} className="survivors" alt="survivors" />
    </div>
  );
};

export default Aside;
