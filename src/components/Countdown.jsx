import React, { useEffect, useState } from "react";
import moment from "moment";

const Countdown = ({ targetDateTime }) => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const target = moment(targetDateTime);
      const duration = moment.duration(target.diff(now));
      const countdown = `${duration.days()} :  ${duration.hours()}  :  ${duration.minutes()}  :  ${duration.seconds()} `;

      // setCountdown(countdown);
      if (duration.asMilliseconds() <= 0) {
        clearInterval(interval);
        setCountdown(` 0 : 0 : 0 : 0 `);
      } else {
        const countdown = `${duration.days()} : ${duration.hours()} : ${duration.minutes()} : ${duration.seconds()}`;
        setCountdown(countdown);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDateTime]);

  return <div className="font-semibold">{countdown}</div>;
};

export default Countdown;
