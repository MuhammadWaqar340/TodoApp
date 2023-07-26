import axios from "axios";
import { AuthModel } from "../models/AuthModel";
import { UserModel } from "../models/UserModel";

const API_URL = process.env.REACT_APP_API_URL;
export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/verify-token`;

export const LOGIN_URL = `${API_URL}/auth/login`;

export function login(email: string, password: string) {
  return axios.post(LOGIN_URL, {
    email,
    password,
  });
}
export function getUserByToken() {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL);
}
