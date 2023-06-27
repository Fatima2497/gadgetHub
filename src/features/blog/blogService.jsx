import axios from "axios";
import { axisToken, base_url } from "../../utils/axiosConfig";

const getBlogs = async() => {
    const response = await axios.get(`${base_url}blog/allBlogs`)
    if(response.data){
        return response.data
    }
}


const getBlog = async(id) => {
    const response = await axios.get(`${base_url}blog/${id}`)
    if(response.data){
        return response.data
    }
}

export const blogService = {
    getBlogs,
    getBlog
}