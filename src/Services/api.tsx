import axios from "axios";

const api = axios.create({
    baseURL: "https://backendvault.starvingdevelopers.tech/",
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;