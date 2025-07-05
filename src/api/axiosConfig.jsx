import axios from "axios";
const instance = axios.create({
  baseURL: "https://infinite-scroll-backend-git-master-mirzaatifbaigs-projects.vercel.app",
  headers: {
    Accept: "application/json",
  },
});
export default instance;
