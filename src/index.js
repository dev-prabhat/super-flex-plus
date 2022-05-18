import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider,HistoryProvider,LikeWatchLaterProvider,ModalProvider,PlaylistProvider,VideoProvider } from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <AuthProvider>
          <VideoProvider>
            <LikeWatchLaterProvider>
              <PlaylistProvider>
                <HistoryProvider>
                  <App />
                </HistoryProvider>
              </PlaylistProvider>
            </LikeWatchLaterProvider>
          </VideoProvider>
        </AuthProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
