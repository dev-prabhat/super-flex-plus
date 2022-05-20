import {useEffect} from "react"

export const useDocumentTitle = (pagename) => {
    useEffect(()=>{
        document.title=`SuperTv+ | ${pagename}`
    })
}