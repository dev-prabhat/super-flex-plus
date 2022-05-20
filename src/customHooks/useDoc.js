import {useEffect} from "react"

export const useDoc = (pagename) => {
    useEffect(()=>{
        document.title=`SuperTv+ | ${pagename}`
    })
}