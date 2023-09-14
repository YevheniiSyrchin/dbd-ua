import React, { FC, useEffect, useState } from "react";
import Axios from "axios";

const Aside: FC = () => {
  const [showFadeIn, setShowFadeIn] = useState(true);
  const [images, setImages] = useState({
    background: "",
    ghostFaceImg: "",
    survivors: "",
  });

  useEffect(() => {
    const loadFilesFromApiAndUpdateLocalStorage = async () => {
      try {
        const response = await Axios.get(
          "https://dbd-rest-api.eremenko.top/wp-json/get/v1/options"
        );
        const options = response.data.response.options;
        const { image_full, image_left, image_right } =
          options["background-images-main-page"];

        const newImages = {
          background: image_full,
          ghostFaceImg: image_right,
          survivors: image_left,
        };

        const localImages = JSON.parse(localStorage.getItem("images") || "{}");

        if (JSON.stringify(newImages) !== JSON.stringify(localImages)) {
          localStorage.setItem("images", JSON.stringify(newImages));

          setImages(newImages);
        }

        const timeout = setTimeout(() => {
          setShowFadeIn(false);
        }, 2000);

        return () => {
          clearTimeout(timeout);
        };
      } catch (error) {
        console.error("Data fetching error:", error);
      }
    };

    const localImages = JSON.parse(localStorage.getItem("images") || "{}");
    if (localImages && Object.keys(localImages).length > 0) {
      setImages(localImages);
      setShowFadeIn(false);
    }

    loadFilesFromApiAndUpdateLocalStorage();
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
