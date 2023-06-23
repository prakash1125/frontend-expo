import React, { useEffect, useState } from "react";
import moment from "moment";

const Countdown = ({ targetDateTime }) => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const target = moment(targetDateTime);
      const duration = moment.duration(target.diff(now));

      if (duration.asMilliseconds() <= 0) {
        clearInterval(interval);
        setCountdown("00 : 00 : 00 : 00");
      } else {
        const days = duration.days().toString().padStart(2, "0");
        const hours = duration.hours().toString().padStart(2, "0");
        const minutes = duration.minutes().toString().padStart(2, "0");
        const seconds = duration.seconds().toString().padStart(2, "0");
        const countdown = `${days} : ${hours} : ${minutes} : ${seconds}`;
        setCountdown(countdown);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateTime]);

  return <div className="font-semibold">{countdown}</div>;
};

export default Countdown;
