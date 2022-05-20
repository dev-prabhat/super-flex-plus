import ReactLoading from 'react-loading';
import { useLikeWatchLater ,useAuth , usePlaylist} from "../../context"
import "./loading.css"

export const Loading = () => {
    const {likeApiCallLoading,watchLaterApiCallLoading} = useLikeWatchLater()
    const {isLoading} = useAuth()
    const {playlistLoading, playlistVideoLoading,} = usePlaylist()
    
    if(!likeApiCallLoading && !watchLaterApiCallLoading && !isLoading && !playlistLoading && !playlistVideoLoading) return null
    return(
        <div className='loading-wrapper'>
            {likeApiCallLoading && <ReactLoading className='reacting-loading' type={"bars"} color={"#ffa500"}/>}
            {watchLaterApiCallLoading && <ReactLoading className='reacting-loading' type={"bars"} color={"#ffa500"}/>}
            {isLoading && <ReactLoading className='reacting-loading' type={"bars"} color={"#ffa500"}/>}
            {playlistLoading && <ReactLoading className='reacting-loading' type={"bars"} color={"#ffa500"}/>}
            {playlistVideoLoading && <ReactLoading className='reacting-loading' type={"bars"} color={"#ffa500"}/>}
        </div>
    )
}