import React from "react";
import { ImSpinner2 } from "react-icons/im";
function Loading() {
  return (
    <div className="flex justify-center items-center h-4/5">
      <ImSpinner2 className="text-8xl animate-spin text-blue-500" />
    </div>
  );
}

export default Loading;
