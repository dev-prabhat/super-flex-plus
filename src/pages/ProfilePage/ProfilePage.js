import React from "react"
import { Header, NavBar } from "../../components";
import {useAuth} from "../../context"
import { useDocumentTitle } from "../../customHooks";
import "../commonPage.css"
import "./profilepage.css"

export const ProfilePage = () => {
    useDocumentTitle("Profile")
    const {user} = useAuth()
    const localUser = JSON.parse(localStorage.getItem("user"))

    const currentUser = {
        firstName:localUser.firstName || user.firstName,
        lastName: localUser.lastName || user.lastName,
        email: localUser.email || user.email
    }
  
    return(
        <>
          <main className="page-main">
              <Header/>
              <NavBar/>
                <section className="page-content">
                    <div className="profile__wrapper padding-md">
                        <div className="avatar avatar-text avatar-text-sm margin-xs">
                            {`${currentUser.firstName.slice(0,1)}${currentUser.lastName.slice(0,1)}`}
                        </div>
                        <h1 className="head-sm margin-xs">FirstName:  {currentUser.firstName}</h1>
                        <h2 className="head-sm margin-xs">LastName:  {currentUser.lastName}</h2>
                        <p className="head-sm margin-xs">Email:  {currentUser.email}</p>
                    </div>
                </section>
          </main>
        </>
    )
}