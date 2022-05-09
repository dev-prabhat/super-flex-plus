import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider,LikeWatchLaterProvider,ModalProvider,VideoProvider } from "./context";
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
            <App />
          </LikeWatchLaterProvider>
        </VideoProvider>
      </AuthProvider>
    </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
