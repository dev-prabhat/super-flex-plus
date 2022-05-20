import { Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import { AuthRoute, PrivateRoute ,Loading} from "./components";
import {Home, Explore , LikePage , WatchLater , PlayList, Login, Mock, SinglePlayer, History} from "./pages";

import "./styles.css"

function App() {
 
  return (
    <>
      <Toaster/>
      <Loading/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/explore/:videoId" element={<SinglePlayer/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path="/like" element={<LikePage/>}/>
          <Route path="/watchlater" element={<WatchLater/>}/>
          <Route path="/playlist" element={<PlayList/>}/>
          <Route path="/history" element={<History/>}/>
        </Route>

        <Route element={<AuthRoute/>}>
           <Route path="/login" element={<Login/>}/>
        </Route>
      
        <Route path="/mock" element={<Mock/>}/>
      </Routes>
    </>
  );
}

export default App;
