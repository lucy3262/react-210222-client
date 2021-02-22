import axios from "./axios";

export const reqLogin = (data) => axios.post("/login", data);
export const reqCategory = () => axios.get("/manage/category/list");
