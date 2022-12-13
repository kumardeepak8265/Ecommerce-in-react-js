import React, { memo } from "react";

function Input({ name, label, id, touched, error, ...props }) {
  return (
    <div>
      <lable htmlFor={id} className="sr-only">
        {label}
      </lable>
      <input
        className="bg-gray-200 p-2 border-2 border-indigo-400 w-full rounded-md"
        {...props}
        name={name}
      />
      {touched && error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
export default memo(Input);
