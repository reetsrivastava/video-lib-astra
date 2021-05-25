import React from "react";
import "../../App.css";
import { LikedCard } from "./LikeCard";
import { useLike } from "../../contexts/like-context";
import { PageHeading } from "../PageHeading";
import { useLikeData } from "../../hooks/useLikesData/useLikesData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useGeneralContext } from "../../contexts/general-context";
import { MyLoader } from "../Loader/Loader";
import { Emtpy } from "../Empty";
export function LikedVideos() {
  const { loader } = useGeneralContext();
  const { likeList } = useLike();

  useLocalStorage();
  useLikeData();
  return (
    <div>
      <PageHeading name="Likes" />
      <div className="video-list-section" style={{textAlign:"center"}}>
        {loader && <MyLoader />}
        {likeList.length ? likeList.map((item) => (
          <LikedCard key={item._id} likelist={item} />
        )) : <Emtpy itemName="Liked List"/>}
      </div>
    </div>
  );
}