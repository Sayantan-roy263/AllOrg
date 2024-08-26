import axios from 'axios';

let adminUrl='https://wtsacademy.dedicateddevelopers.us/api'
let profileURL ='https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic'

let imageURL = "https://wtsacademy.dedicateddevelopers.us/uploads/product";

if(process.env?.REACT_APP_ENV==="production"){
    adminUrl='https://wtsacademy.dedicateddevelopers.us/api';
}

export const baseURL = adminUrl;
let axiosInstance = axios.create({
    baseURL,
});
export const profileDetailsPath = (media) => {
    return profileURL+`/${media}`;
  }

export const productpic = (media) =>{
    return imageURL+`/${media}`;
}  

axiosInstance.interceptors.request.use(
    async function (config){
        const token=
        localStorage.getItem("token") || sessionStorage.getItem("token");
        if(token !== null || token !== undefined){
            config.headers["x-access-token"]=token;
        }
        return config;
    },
    function(err){
        return Promise.reject
    }
);
export default axiosInstance;