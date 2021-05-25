import React from "react";
import "../../App.css";
import { PlaylistContainer } from "./PlaylistContainer";
import { usePlaylist } from "../../contexts/playlist-context";
import { PageHeading } from "../PageHeading";
import { usePlaylistData } from "../../hooks/usePlaylistData/usePlaylistData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { MyLoader } from "../Loader/Loader";
import { useGeneralContext } from "../../contexts/general-context";
export function Playlist() {
  useLocalStorage();
  usePlaylistData();
  const { playList } = usePlaylist();
  const { loader } = useGeneralContext();

  return (
    <div className="playlist-section">
      <PageHeading name="Playlists" />
      <div className="playlist-wrapper">
        {loader && <MyLoader />}
        {playList.map((playlist) => {
          return <PlaylistContainer key={playlist._id} playlist={playlist} />;
        })}
      </div>
    </div>
  );
}