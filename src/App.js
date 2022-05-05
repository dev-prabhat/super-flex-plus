import { Route, Routes } from "react-router-dom";
import { Home ,LikePage,WatchLater,PlayList,Mock, Explore} from "./pages/Index";

import "./styles.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/like" element={<LikePage/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/playlist" element={<PlayList/>}/>
        <Route path="/mock" element={<Mock/>}/>
      </Routes>
    </>
  );
}

export default App;
