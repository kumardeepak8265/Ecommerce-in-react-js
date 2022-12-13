import React, { useEffect } from "react";
import { WithAlert } from "../Providers/WithProvider";

function Alert({ removeAlert, alert }) {
  useEffect(
    function () {
      if (alert) {
        const timeout = setTimeout(removeAlert, 5000);
        return function () {
          clearTimeout(timeout);
        };
      }
    },
    [alert]
  );

  if (!alert) {
    return "";
  }

  const { type, message } = alert;
  console.log("type", type);
  console.log("message", message);
  let textColor;
  if (type == "error") {
    textColor = " text-red-600 ";
  } else if (type == "succes") {
    textColor = " text-green-600 ";
  }

  return (
    <div className=" bg-gray-200 sm:m-20 p-2 rounded-md flex border-4 border-blue-600 ">
      <div className={" grow text-2xl " + textColor}>{message}</div>
      <button className="text-2xl" onClick={removeAlert}>
        dismiss
      </button>
    </div>
  );
}
export default WithAlert(Alert);
