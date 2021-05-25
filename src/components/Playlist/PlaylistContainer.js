import React from "react";
import "../../App.css"
import "./PlaylistContainer.css"
import { Link } from "react-router-dom";
import { deletePlaylist } from "../../api/playlist/deletePlaylist";
import Image from "../../assets/images/default2.png";
import { usePlaylist } from "../../contexts/playlist-context";
import { usePlaylistData } from "../../hooks/usePlaylistData/usePlaylistData";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const PlaylistContainer = ({ playlist }) => {
  const { playlistId, dispatchplaylist } = usePlaylist();

  const playListImage = (list) => {
    return list[0]._id;
  };

  const checkImageExist = (list) => {
    if (list.length !== 0) {
      return `https://img.youtube.com/vi/${playListImage(list)}/mqdefault.jpg`;
    } else {
      return Image;
    }
  };

  return (
    <div class="card" style={{backgroundImage:`url(${checkImageExist(playlist.list)})`}} key={playlist._id}>
            <span class="card-category">{playlist.name}</span>
            <div class="card-description">
                <h3>{playlist.name}</h3>
                <p>Lorem Ipsum ....</p>
                <Link to={`/playlists/${playlist._id}`} className="tag">
                  <i class="fas fa-play"></i> <span>WATCH</span>
                 </Link>
                 <span className="tag" onClick={() => deletePlaylist(playlistId, playlist._id, dispatchplaylist)}> 
                   <i className="fas fa-trash"></i> 
                   <span>DELETE</span>
                   </span>
            </div>
        </div>
  );
};