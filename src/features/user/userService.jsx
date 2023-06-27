import axios from "axios";
import { axisToken, base_url } from "../../utils/axiosConfig";


const register = async(userData)=>{
    const response = await axios.post(`${base_url}user/register`,userData)
    if(response.data){
        return response.data
    }
}

const login = async(userData)=>{
    const response = await axios.post(`${base_url}user/login`,userData)
    if(response.data){
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data
    }
}
const getWishlist = async(userData)=>{
    const response = await axios.get(`${base_url}user/wishlist`,axisToken)
    if(response.data){
        return response.data
    }
}
const addCart = async(cartData)=>{
    const response = await axios.post(`${base_url}user/cart`,cartData,axisToken)
    if(response.data){
        return response.data
    }
}
const getCart = async()=>{
    const response = await axios.get(`${base_url}user/getcart`,axisToken)
    if(response.data){
        return response.data
    }
}

const removeProdfromCart = async(cartitemId)=>{
    
    const response = await axios.delete(`${base_url}user/removecart/${cartitemId}`,axisToken)
    if(response.data){
        return response.data
    }
}

const upadteProdCart = async(cartDetail)=>{
    console.log(axisToken);
    const response = await axios.put(`${base_url}user/updatecart/${cartDetail?.cartItemId}/${cartDetail?.quantity}`,{},axisToken)
    if(response.data){
        return response.data
    }
}

const createOrder = async(orderData)=>{
    
    const response = await axios.post(`${base_url}user/cart/createOrder`,orderData,axisToken)
    if(response.data){
        return response.data
    }
}

const getOrder = async()=>{
    
    const response = await axios.get(`${base_url}user/getOrder`,axisToken)
    if(response.data){
        return response.data
    }
}

const getUser = async(id)=>{
    
    const response = await axios.get(`${base_url}user/${id}`)
    if(response.data){
        return response.data
    }
}

const myProfile = async(udata)=>{
    
    const response = await axios.put(`${base_url}user/edit_user`,udata,axisToken)
    if(response.data){
        return response.data
    }
}


const forgetPass = async(userEmail)=>{
    
    const response = await axios.post(`${base_url}user/forgetPassword`,userEmail)
    if(response.data){
        return response.data
    }
}

const resetPass = async(data)=>{
    
    const response = await axios.put(`${base_url}user/reset-Password/${data.token}`,{password:data?.password})
    if(response.data){
        return response.data
    }
}



export const  userService = {
    register,
    login,
    getWishlist,
    addCart,
    getCart,
    removeProdfromCart,
    upadteProdCart,
    createOrder,
    getOrder,
    myProfile,
    getUser,
    forgetPass,
    resetPass
}