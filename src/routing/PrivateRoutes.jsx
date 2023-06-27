import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({children}) => {
    const getToken =  JSON.parse(localStorage.getItem("customer"))
    return getToken?.token !== undefined ? children : (<Navigate to='/login' replace={true} />)
}