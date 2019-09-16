import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.API_URL || "http://localhost:5000/api/",
  headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default apiClient;
