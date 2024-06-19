import axios from "axios";

const newRequest = axios.create({
  //baseURL: "http://localhost:3000/api/",
  // baseURL: "https://api-h2x3.onrender.com/api/",
  baseURL: "http://ec2-3-109-48-113.ap-south-1.compute.amazonaws.com:3000/api/",
  withCredentials: true,
});

export default newRequest;