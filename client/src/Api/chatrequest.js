import axios from "axios";
const Api = axios.create({
  baseURL: "http://localhost:7500/api",
});

export const userChats = (id) => Api.get(`/chat/${id}`);

export const getUser = (userId) => Api.get(`/${userId}`);
