import axios from "axios";

const axiosInstance =axios.create({
    baseURL:'https://fooddelivery-62a38-default-rtdb.firebaseio.com/',
    headers:{
        'Content-Type':'application/json'
    }
})


export default axiosInstance;