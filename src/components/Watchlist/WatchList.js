import React from "react";
import "../../App.css";
import { WatchCard } from "../Watchlist/WatchCard";
import { useWatchList } from "../../contexts/watchlist-context";
import { PageHeading } from "../PageHeading";
import { useWatchlistData } from "../../hooks/useWatchListData/useWatchlistData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { MyLoader } from "../Loader/Loader";
import { useGeneralContext } from "../../contexts/general-context";
import { Emtpy } from "../Empty";

export const WatchList = () => {
  const { watchList } = useWatchList();
  const { loader } = useGeneralContext();
  useLocalStorage();
  useWatchlistData();
  return (
    <div>
      <PageHeading name="Watchlist" />
      <div className="video-list-section">
        {loader && <MyLoader />}
        {watchList.length? watchList.map((watchlist) => (
          <WatchCard key={watchlist._id} watchlist={watchlist} />
        )) : <Emtpy itemName="Watchlist" />}
      </div>
    </div>
  );
};