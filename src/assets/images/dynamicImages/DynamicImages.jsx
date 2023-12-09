import Image from "next/image";

import rainly from "./heavy-rain.png";
import sunly from "./sun.png";
import mainlyCloudy from "./cloudy.png";
import snowly from "./snow.png";

const DynamicImages = ({ weatherType }) => {
  let imageSrc;

  switch (weatherType) {
    case "Rain":
      imageSrc = rainly;
      break;
    case "Clear":
      imageSrc = sunly;
      break;
    case "Clouds":
      imageSrc = mainlyCloudy;
      break;
    case "Snow":
      imageSrc = snowly;
      break;
    default:
      return null;
  }

  return <Image src={imageSrc} />;
};

export default DynamicImages;
