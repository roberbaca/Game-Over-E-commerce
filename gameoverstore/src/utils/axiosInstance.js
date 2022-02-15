import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://gameover-backend.herokuapp.com/api" // mi backend
});

export default axiosInstance;