import { Route, Routes } from "react-router-dom";
import { Home ,LikePage,WatchLater,PlayList} from "./pages/Index";

import "./styles.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/like" element={<LikePage/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/playlist" element={<PlayList/>}/>
      </Routes>
    </>
  );
}

export default App;
