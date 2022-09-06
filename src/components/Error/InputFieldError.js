import React from "react";

export default (props) => {
  return (
    <>{props.error && <p className="text-red-500">{props?.error[0]}</p>}</>
  );
};