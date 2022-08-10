import axios from "axios";
import { User } from "../interfaces/api";

import { BodyPost } from "../interfaces/bodyPost";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const handleGetUsers = async () => {
  try {
    const { data } = await api.get<User[]>("/users");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const handlePost = async (body: BodyPost) => {
  try {
    await api.post("/users", body);
    return true;
  } catch (error) {
    return false;
  }
};

export const putUser = async (body: BodyPost, id: number) => {
  try {
    await api.put(`/users/${id}`, body);
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteUser = async (id: number) => {
  try {
    await api.delete(`/users/${id}`);
    return true;
  } catch (error) {
    return false;
  }
};
