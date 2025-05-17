import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
axios.create({
  baseURL: "https://api.example.com",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: "application/json",
  },
});
