import { Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import { useTheme } from "./context";
import { AuthRoute, PrivateRoute ,Loading} from "./components";
import { Explore , LikePage , WatchLater , PlayList, Login, Mock, SinglePlayer, History,SignUp, Page404, ProfilePage} from "./pages";

import "./styles.css"
function App() {
   const { theme} = useTheme()
  return (
    <div className={`${theme === "light" ? "dark-theme" : "light-theme"}`}>
      <Toaster/>
      <Loading/>
      <Routes>
        <Route path="/" element={<Explore/>}/>
        <Route path="/video/:videoId" element={<SinglePlayer/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path="/like" element={<LikePage/>}/>
          <Route path="/watchlater" element={<WatchLater/>}/>
          <Route path="/playlist" element={<PlayList/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Route>

        <Route element={<AuthRoute/>}>
           <Route path="/login" element={<Login/>}/>
           <Route path="/signup" element={<SignUp/>}/>
        </Route>
      
        <Route path="/mock" element={<Mock/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </div>
  );
}

export default App;
