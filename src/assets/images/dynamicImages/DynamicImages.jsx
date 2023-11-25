import Image from "next/image";

import rainly from "./rainly.png";
import smallRain from "./small_rain.png";
import smallRainSun from "./small_rain_sun.png";
import sunly from "./sunly.png";
import mainlyCloudy from "./mainly_cloudy.png";
import close from "../staticImages/close.png";

const DynamicImages = ({ id }) => {
  switch (id) {
    case "rain":
      return <Image src={rainly} width={50} height={50} />;
    case "small_rain":
      return <Image src={smallRain} width={50} height={50} />;
    case "small_rain_sun":
      return <Image src={smallRainSun} width={50} height={50} />;
    case "sun":
      return <Image src={sunly} width={50} height={50} />;
    case "mainly_cloudy":
      return <Image src={mainlyCloudy} width={50} height={50} />;
    case "close":
      return <Image src={close} width={20} height={20} />;
    default:
      return null;
  }
};

export default DynamicImages;
