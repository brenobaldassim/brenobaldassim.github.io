import axios from "axios";

let token = import.meta.env.VITE_GITHUB_TOKEN;
export const github_instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${token}`
    }
  });