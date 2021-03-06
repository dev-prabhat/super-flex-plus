import {Navigate,useLocation,Outlet} from "react-router-dom"
import { useAuth } from "../context" 

export const PrivateRoute = () => {
   const {encodedToken} = useAuth()
   const location = useLocation()

   return encodedToken ? (
       <Outlet/>
   ) : (
       <Navigate to="/login" state={{from : location}} replace/>
   )
}