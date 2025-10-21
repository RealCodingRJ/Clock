import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [date, setDate] = useState(0);
  const [dateHours, setDateHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const dates = new Date().getHours();
      const datesMin = new Date().getMinutes();
      const datesSeconds = new Date().getSeconds();
      setDate(dates);
      setMinutes(datesMin);
      setDateHours(datesSeconds);
    }, 1000);
  });

  return (
    <div>
      <h2>
        {date}:{minutes}:{dateHours}
      </h2>
      <h2
        style={{
          fontWeight: "100",
          fontSize: "17px",
          textAlign: "center",
          position: "relative",
          top: "-320px",
        }}
      >
        {new Date().getMonth() + 1} / {new Date().getDate()} /
        {new Date().getFullYear()}
      </h2>
    </div>
  );
}
