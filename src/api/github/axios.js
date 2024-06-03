import axios from "axios";

export const gh_instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${process.env.VITE_GITHUB_TOKEN}`
    }
  });