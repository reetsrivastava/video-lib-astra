import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GeneralContextProvider } from './contexts/general-context';
import { LikeProvider } from './contexts/like-context';
import { PlaylistProvider } from './contexts/playlist-context';
import { WatchListProvider } from './contexts/watchlist-context';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <GeneralContextProvider>
      <LikeProvider>
        <PlaylistProvider>
          <WatchListProvider>
        <App />
        </WatchListProvider>
      </PlaylistProvider>
    </LikeProvider>
    </GeneralContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
