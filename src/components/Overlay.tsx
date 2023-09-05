import React from "react";

interface OverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ children, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="formOverlay" onClick={handleOverlayClick}>
      <div className="formContainer">{children}</div>
    </div>
  );
};

export default Overlay;
