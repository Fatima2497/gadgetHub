import { Navigate } from "react-router-dom";

export const OpenRoutes = ({children}) => {
    const getToken =  JSON.parse(localStorage.getItem("customer"))
    return getToken?.token === undefined ? children : (<Navigate to='/' replace={true} />)
}