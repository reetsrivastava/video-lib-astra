import React from "react";
import "./VideoCard.css"
import { Link } from "react-router-dom";
import { thumbnail } from "../../utils/thumbnail";

export function VideoCard({ videos }) {
  const { _id, name, category } = videos;
  return ( 
    <div class="property-card">
    <Link to={`/${_id}`} className="link">
      <div class="property-image" style={{backgroundImage:`url(${thumbnail(_id)})`}}>
        
      </div>
    <div class="property-description">
      <h5> {category} </h5>
      <p>{name}</p>
    </div>
    </Link>
    </div>
  );
}