import { useState } from "react";

export default function GolfCard({ name, location, par, image }) {
  const [showInfo, setShowInfo] = useState(false);
  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="golf-card">
      <img
        src={image}
        alt={`Img of ${name}`}
        onClick={handleClick}
        className="golf-card-image"
      />

      {showInfo ? <h1>{name}</h1> : null}
      {showInfo ? <h2>{location}</h2> : null}
      {showInfo ? <h3>{par}</h3> : null}
    </div>
  );
}
