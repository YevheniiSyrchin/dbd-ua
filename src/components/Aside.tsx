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
    Axios.get("https://dbd-rest-api.eremenko.top/wp-json/get/v1/options")
      .then((response) => {
        const options = response.data.response.options;
        const { image_full, image_left, image_right } =
          options["background-images-main-page"];

        setImages({
          background: image_full,
          ghostFaceImg: image_right,
          survivors: image_left,
        });

        const timeout = setTimeout(() => {
          setShowFadeIn(false);
        }, 2000);

        return () => {
          clearTimeout(timeout);
        };
      })
      .catch((error) => {
        console.error("Data fetching error:", error);
      });
  }, []);

  return (
    <div>
      <div className="background">
        <img src={images.background} alt="background" />
      </div>
      <img
        src={images.ghostFaceImg}
        className={`ghostFace ${showFadeIn ? "fade-in" : ""}`}
        alt="ghostFace"
      />
      <img src={images.survivors} className="survivors" alt="survivors" />
    </div>
  );
};

export default Aside;
