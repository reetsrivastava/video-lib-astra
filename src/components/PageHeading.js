import React from "react";
import "../App.css"

export const PageHeading = ({ name }) => {
  return (
    <div className="page-heading">
      <h1 className="text text-m">{`/${name}`}</h1>
    </div>
  );
};