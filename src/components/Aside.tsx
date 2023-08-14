import React, { FC, useEffect, useState } from "react";
import ghostFaceImg from "../assets/images/ghostface.png";
import survivors from "../assets/images/survivors.png";
import background from "../assets/images/fog-background.jpg";

const Aside: FC = () => {
  const [showFadeIn, setShowFadeIn] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFadeIn(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <div className="background">
        <img src={background} />
      </div>
      <img
        src={ghostFaceImg}
        className={`ghostFace ${showFadeIn ? "fade-in" : ""}`}
      />
      <img src={survivors} className="survivors" />
    </div>
  );
};

export default Aside;
