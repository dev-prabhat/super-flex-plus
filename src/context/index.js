import {useAuth,AuthProvider} from "./Auth-Context"
import {VideoProvider,useVideo} from "./Video-Context"
import { ModalProvider, useModal } from "./Modal-Context"
import { LikeWatchLaterProvider,useLikeWatchLater } from "./Like.Watch-Context"
import { HistoryProvider,useHistory } from "./History-Context"
import { FilterProvider, useFilter } from "./Filter-Context"  
import { PlaylistProvider,usePlaylist } from "./Playlist-Context"

export {
        VideoProvider,
        useVideo,
        useAuth,
        AuthProvider,
        ModalProvider,
        useModal,
        LikeWatchLaterProvider,
        useLikeWatchLater,
        HistoryProvider,
        useHistory,
        FilterProvider, 
        useFilter,
        PlaylistProvider,
        usePlaylist
    }
