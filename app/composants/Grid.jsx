import { Card } from "./Card";
import MagicBento from "./MagicBento";

export const Grid = () => {
  return (
    <MagicBento
      textAutoHide={false}
      enableStars={true}
      enableSpotlight={true}
      enableBorderGlow={true}
      enableTilt={true}
      enableMagnetism={true}
      clickEffect={true}
      spotlightRadius={300}
      particleCount={12}
      glowColor="132, 0, 255"
    />
  );
};


