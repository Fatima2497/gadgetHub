import axios from 'axios'
import {  axisToken, base_url } from "../../utils/axiosConfig";


const getProducts  = async(data)=>{

    const response = await axios.get(`${base_url}product/getProduct?${data?.brands?`brand=${data?.brands}&&`:""}${data?.tags?`tags=${data?.tags}&&`:""}${data?.category?`category=${data?.category}&&`:""}${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}${data?.sort?`sort=${data?.sort}&&`:""}`);
    if(response.data){
        return response.data
    }
}

const getSingleProduct  = async(id)=>{
    const response = await axios.get(`${base_url}product/getaProduct/${id}`)
    if(response.data){
        return response.data
    }
}


const addToWishList  = async(prodId)=>{
 
    const response = await axios.put(`${base_url}product/wishList`, {prodId},axisToken)
    if(response.data){
        return response.data
    }
}

const addRateProd  = async(data)=>{
 
    const response = await axios.put(`${base_url}product/rating`,data,axisToken)
    if(response.data){
        return response.data
    }
}

export const productService = {
    getProducts,
    getSingleProduct,
    addToWishList,
    addRateProd
}

