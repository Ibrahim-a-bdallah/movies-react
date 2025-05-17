import axios from "axios";

axios.create({
  baseURL: "https://api.example.com",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjlkNTU0MjBkNmJkMmMzNjEyN2E5YTAyNDg2ZTg3YSIsIm5iZiI6MTc0NzQ1MDQ5MC4zNjIsInN1YiI6IjY4MjdmYTdhN2UwN2Q2ZmZlYzllMmE0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AL5NGCLc19hDqlLp-H7tkOh0bk_2swslsWdDCV9regE`,
    accept: "application/json",
  },
});
