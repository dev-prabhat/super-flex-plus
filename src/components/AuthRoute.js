import {Navigate,useLocation,Outlet} from 'react-router-dom'
import { useAuth } from '../context'

export const AuthRoute = () => {
    const {encodedToken} = useAuth()
    const location = useLocation()

    let from = location?.state?.from?.pathname || "/"
    return encodedToken ? (
         <Navigate to={from} state={{from:location}} replace/>
    ) : (
        <Outlet/>
    )
}