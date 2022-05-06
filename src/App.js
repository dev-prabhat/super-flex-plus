import { Route, Routes } from "react-router-dom";
import { AuthRoute, PrivateRoute } from "./components";
import { Home ,LikePage,WatchLater,PlayList,Mock, Explore, Login} from "./pages/Index";

import "./styles.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path="/like" element={<LikePage/>}/>
          <Route path="/watchlater" element={<WatchLater/>}/>
          <Route path="/playlist" element={<PlayList/>}/>
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
