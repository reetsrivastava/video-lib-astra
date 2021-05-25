import React from "react";
import "../../App.css";
import "../Videos/VideoCard.css"
import { usePlaylist } from "../../contexts/playlist-context";
import { useParams, Link } from "react-router-dom";
import { PageHeading } from "../PageHeading";
import { thumbnail } from "../../utils/thumbnail";
import { useSinglelistData } from "../../hooks/usePlaylistData/useSinglistData";
import { useGeneralContext } from "../../contexts/general-context";
import { MyLoader } from "../Loader/Loader";
import { removeFromPlaylist } from "../../api/playlist/removeFromPlaylist";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const PlaylistCard = () => {
  const { playList, playlistId, dispatchplaylist } = usePlaylist();
  const { loader } = useGeneralContext();
  const { id } = useParams();
  useLocalStorage();
  const playlist = useSinglelistData(playlistId, id);
  const getPlaylistData = (list, id) => {
    return list?.find((item) => item._id === id);
  };

  const playlistData =
    playList.length !== 0
      ? getPlaylistData(playList, id)
      : getPlaylistData(playlist, id);

  return (
    <div>
      <PageHeading
        name={`Playlist/${playlistData ? playlistData.name : "..."}`}
      />
      <div className="video-list-section">
        {loader && <MyLoader />}{" "}
        {playlistData?.list.map((playlistitem) => {
          return (
            // <div className="card-vertical" key={playlistitem._id}>
            //   <Link to={`/${playlistitem._id}`} >
            //         <img src={thumbnail(playlistitem._id)} alt={playlistitem.name} className="img-responsive" />
            //   </Link>
            // <div className="vertical-card-desc">
            //     <h3>{playlistitem.category}</h3>
            //     <p>{playlistitem.name}</p>         
            // </div> 
            // <button onClick={() =>
            //            removeFromPlaylist(
            //            playlistId,
            //            id,
            //            playlistitem._id,
            //            dispatchplaylist
            //          )
            //       } className="btn-secondary vertical-card-img">Remove</button>
            // </div>

            <div class="property-card" key={playlistitem._id}>
              <Link to={`/${playlistitem._id}`} className="link">
                <div class="property-image" style={{backgroundImage:`url(${thumbnail(playlistitem._id)})`}}>
                <i class="fas fa-trash" onClick={() =>
                        removeFromPlaylist(
                        playlistId,
                        id,
                        playlistitem._id,
                        dispatchplaylist
                      )
                   }></i>
                </div>
              <div class="property-description">
                <h5> {playlistitem.category} </h5>
                <p>{playlistitem.name}</p>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};