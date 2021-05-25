import React from "react";
import "../../App.css"
import "./WatchCard.css"
import { Link } from "react-router-dom";
import { removeFromWatchlist } from "../../api/watchlist/removeFromWatchlist";
import { useWatchList } from "../../contexts/watchlist-context";
import { thumbnail } from "../../utils/thumbnail";
import { toastMessages } from "../../utils/toastMessages";

export const WatchCard = ({ watchlist }) => {
  const { watchlistId, dispatchwatchlist } = useWatchList();
  const { _id, name, category } = watchlist;

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
          <div className="tag" onClick={() =>
           removeFromWatchlist(watchlistId, _id, dispatchwatchlist)
           }>
            <i class="fas fa-trash"></i> <span>DELETE</span>
          </div>
        </div>
      </div>
    </div>
  );
};