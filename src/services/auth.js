import Axios from "axios";

async function callAuth(data, type) {
  try {
    const response = await Axios.post(
      `https://dztours-api.herokuapp.com/api/v1/users/${type}`,
      data
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

async function signUp(data) {
  return await callAuth(data, "signup");
}

async function login(data) {
  return await callAuth(data, "login");
}

function storeTheUser(token, data) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(data));
}

function getTheUserFromStorage() {
  return JSON.parse(localStorage.getItem("user"));
}

function getTheTokenFromStorage() {
  return localStorage.getItem("token");
}

function deleteTheUserAndTokenFromStorage() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export default {
  login,
  signUp,
  storeTheUser,
  getTheUserFromStorage,
  getTheTokenFromStorage,
  deleteTheUserAndTokenFromStorage
};
