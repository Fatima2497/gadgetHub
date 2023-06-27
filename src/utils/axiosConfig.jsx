export const base_url = "http://localhost:5000/api/";

// const  data = JSON.parse(localStorage.getItem('customer'))
// const token = data.token
// console.log(token);
const getData = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null

export const axisToken = {
    headers:{ 
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${getData !== null ? getData.token : ""}`
    }
}