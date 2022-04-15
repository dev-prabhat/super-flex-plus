import { Header, NavBar } from "../../components"
import "../commonPage.css"

export const PlayList = () => {
    return(
        <>
         <main className="page-main">
             <Header/>
             <NavBar/>
             <section className="video-listed">
               <h1>This is my homepage for video library</h1>
             </section>
         </main>
        </>
    )
}