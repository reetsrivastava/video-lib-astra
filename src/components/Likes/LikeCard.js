import React from "react";
import "../../App.css"
import "./LikeCard.css"
import { Link } from "react-router-dom";
import { useLike } from "../../contexts/like-context";
import { thumbnail } from "../../utils/thumbnail";
import { toastMessages } from "../../utils/toastMessages";

export const LikedCard = ({ likelist }) => {
  const { dispatchlike } = useLike();
  const { _id, name, category } = likelist;

  const deleteFromLikelist = (id) => {
    dispatchlike({
      type: "REMOVE_FROM_LIKED",
      payload: id,
    });
    toastMessages("Video Removed from Likes");
  };

  return (   
    <div className="card"  style={{backgroundImage:`url(${thumbnail(_id)})`}}>
      <div>
        <h1>{category}</h1>
        <p>{name}...</p>
        <div className="tags">
          <div className="tag">
            <Link to={`/${_id}`} className="link">
             <i class="fas fa-play"></i> <span>WATCH</span>
             </Link>
          </div>
          <div className="tag" onClick={() => deleteFromLikelist(_id)}>
            <i class="fas fa-thumbs-down" ></i> <span>DISLIKE</span>
          </div>
        </div>
      </div>
    </div>
    
  );
};