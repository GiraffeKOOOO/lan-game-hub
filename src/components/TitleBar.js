import { useState, useEffect } from "react";
import "../App.css";
import { Calendar2Week, Clock } from "react-bootstrap-icons";

function TitleBar() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 60000);
  }, []);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <p className="text-[30px] text-underline my-auto ml-[15px]">LAN Game Hub</p>
      </div>
      <div className="col-span-1 mx-auto">
        <span className="flex flex-row gap-3 mx-auto mt-[10px]">
          <Calendar2Week size={30} />
          <p className="text-[20px]">
            {dateState.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "short",
            })}
          </p>{" "}
          <Clock size={30} />
          <p className="text-[20px]">
            {dateState.toLocaleString("en-GB", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })}
          </p>
        </span>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}

export default TitleBar;
