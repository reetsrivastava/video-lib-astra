import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Videos } from "./components/Videos/Videos";
import { Playlist } from "./components/Playlist/Playlist";
import { LikedVideos } from "./components/Likes/LikedVideos";
import { WatchList } from "./components/Watchlist/WatchList";
import { VideoPlayer } from "./components/Videos/VideoPlayer";
import { PlaylistCard } from "./components/Playlist/PlaylistCard";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <div className="main-section">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Videos />} />
            <Route path="/playlists" element={<Playlist />} />
            <Route path="/playlists/:id" element={<PlaylistCard />} />
            <Route path="/liked-videos" element={<LikedVideos />} />
            <Route path="/watch-list" element={<WatchList />} />
            <Route path=":id" element={<VideoPlayer />} />
          </Routes>
        </div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
