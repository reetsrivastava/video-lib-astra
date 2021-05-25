import React from "react";
import "../../App.css"
import { useGeneralContext } from "../../contexts/general-context";
export const Categories = ({ category }) => {
  const { videoFilter, dispatchgeneral } = useGeneralContext();
  return (
    <a
      className={`btn-link-light ${
        videoFilter === category && `active`
      }`}
      onClick={() =>
        dispatchgeneral({ type: "VIDEO_FILTER", payload: category })
      }>
      {" "}
      {category}
    </a>
  );
};