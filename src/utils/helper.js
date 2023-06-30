import { DateTime } from "luxon";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
export const url = process.env.REACT_APP_API_ENDPOINT || "";

//GET LOCAL STORAGE ITEM
export const getLocalStorageItem = (key) => localStorage.getItem(key);

//SET VALUE TO LOCAL STORAGE
export const setLocalStorageItem = (key, value) =>
  localStorage.setItem(key, value);

//REMOVE ITEM FROM LOCALSTORAGE
export const removeLocalStorageItem = (key) => localStorage.removeItem(key);

//GET DEFAULT VALUES USING LOCALSTORAGE

export const getDefaultState = (keyName) => {
  const storedValue = localStorage.getItem(keyName);

  if (storedValue !== null && storedValue !== undefined) {
    try {
      const value = JSON.parse(storedValue);

      return value;
    } catch (error) {
      console.error("Error parsing localStorage value:", error);
    }
  } else {
    console.error("Value is undefined or null in localStorage");
    return null;
  }
};
export const ErrorToast = ({ msg }) => (
  <div>
    <svg
      width="1.0625em"
      height="1em"
      viewBox="0 0 17 16"
      className="bi bi-exclamation-triangle mb-1 mr-1"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
      />
      <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
    </svg>
    &nbsp;&nbsp;
    {msg}
  </div>
);
ErrorToast.propTypes = {
  msg: PropTypes.string,
};

export const SuccessToast = ({ msg }) => (
  <div>
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-check-circle mb-1 mr-1"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        fillRule="evenodd"
        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
      />
    </svg>
    &nbsp;&nbsp;
    {msg}
  </div>
);
SuccessToast.propTypes = {
  msg: PropTypes.string,
};

export const WarningToast = ({ msg }) => (
  <div>
    <svg
      width="1.0625em"
      height="1em"
      viewBox="0 0 17 16"
      className="bi bi-exclamation-triangle mb-1 mr-1"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
      />
      <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
    </svg>
    &nbsp;&nbsp;
    {msg}
  </div>
);
WarningToast.propTypes = {
  msg: PropTypes.string,
};

//To Find odds for the runner in Market From the API data emit by Socket

export const findRunnerOdds = (odds, runnerCode) => {
  const currentodd = Object.values(odds)[0]?.runners.find((odd) => {
    const data = parseFloat(odd?.selectionId) === parseFloat(runnerCode);
    return data;
  });
  return currentodd;
};

// Calculate for Bet on Back

export const betOnBack = {
  profit: (odds, stake) => {
    return Math.round(parseFloat(odds - 1).toFixed(2) * stake);
  },
  lose: (stake) => {
    return -1 * stake;
  },
};

// Calculate for Bet on Lay
export const betOnLay = {
  lose: (odds, stake) => {
    return -1 * Math.round(parseFloat(odds - 1).toFixed(2) * stake);
  },
  profit: (stake) => {
    return stake;
  },
};

// Bets Validations for odds
export const checkOdds = (odd, type, oddsObj) => {
  // oddsObj contains lay, and back arrays
  if (type === "back") {
    const limit = findMaxFromArrayOfObjects(oddsObj?.availableToBack);
    if (odd > limit?.price) {
      return false;
    } else {
      return true;
    }
  } else {
    const limit = findMinFromArrayOfObjects(oddsObj?.availableToLay);
    if (odd < limit?.price) {
      return false;
    } else {
      return true;
    }
  }
};

//Date format to show

export const formatDate = (date) => {
  const eventDate = date;

  if (eventDate) {
    const currentDate = new Date();
    const parsedEventDate = DateTime.fromISO(eventDate);

    if (
      parsedEventDate.toFormat("yyyy-MM-dd") ===
      currentDate.toISOString().split("T")[0]
    ) {
      return "Today " + parsedEventDate.toFormat("HH:mm");
    } else if (parsedEventDate > currentDate) {
      return "Tommorow " + parsedEventDate.toFormat("HH:mm");
    } else {
      const formattedDate = parsedEventDate.toFormat("dd MMM HH:mm");
      return formattedDate;
    }
  }
};

//Find the greatest value from array of objects
const findMaxFromArrayOfObjects = (array) => {
  let maxObject = array.reduce(function (previous, current) {
    return previous.price > current.price ? previous : current;
  });
  return maxObject;
};

//Find the Minimum value from array of objects
const findMinFromArrayOfObjects = (array) => {
  let maxObject = array.reduce(function (previous, current) {
    return previous.price < current.price ? previous : current;
  });
  return maxObject;
};

// For calling the toastify alert
export const notifySuccess = (message) => {
  return toast.success(message, {
    className: "custom-toast",
    position: "top-center",
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const notifyWarning = (message) => {
  return toast.error(message, {
    className: "custom-toast",
    position: "top-center",
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

//Find length of all Array inside another Arrays

export const findEventsLength = (array) => {
  const totalLength = array?.reduce(
    (acc, league) => acc + league.events.length,
    0
  );
  return totalLength;
};

//Format numbers, to short the length

export const formatNumber = (num) => {
  if (num >= 1000) {
    return num / 1000 + "k";
  }
  return num;
};

export { findMaxFromArrayOfObjects, findMinFromArrayOfObjects }; // because this function used in this same file also
