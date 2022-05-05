import React from "react"
import { Header, NavBar } from "../../components"

export const Explore = () => {
    return(
        <> 
          <main className="page-main">
              <Header/>
              <NavBar/>
                <section className="video-listed">
                    <h1>This is my Explore for video library</h1>
                </section>
          </main>
        </>
    )
}