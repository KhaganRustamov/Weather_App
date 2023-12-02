import ThisDay from "@/components/thisDay/ThisDay";
import ThisDayInfo from "@/components/thisDayInfo/ThisDayInfo";
import Days from "@/components/days/Days";

export default function Home() {
  return (
    <>
      <div className="container_top">
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </>
  );
}
