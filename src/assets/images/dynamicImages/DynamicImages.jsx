import Image from "next/image";

import rainly from "./heavy-rain.png";
import smallRain from "./small_rain.png";
import smallRainSun from "./small_rain_sun.png";
import sunly from "./sun.png";
import mainlyCloudy from "./cloudy.png";
import snowly from "./snow.png";

const DynamicImages = ({ weatherType }) => {
  let imageSrc;

  switch (weatherType) {
    case "Rain":
      imageSrc = rainly;
      break;
    case "Drizzle":
      imageSrc = smallRain;
      break;
    case "Thunderstorm":
      imageSrc = smallRainSun;
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
