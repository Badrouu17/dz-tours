import Axios from "axios";

Axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`
};

export async function getMe() {
  try {
    const response = await Axios.get(
      `https://dztours-api.herokuapp.com/api/v1/users/me`
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

export async function updateMe(data) {
  try {
    const response = await Axios({
      method: "PATCH",
      url: `https://dztours-api.herokuapp.com/api/v1/users/updateMe`,
      data
    });
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

export async function updatePassword(data) {
  try {
    const response = await Axios({
      method: "PATCH",
      url: `https://dztours-api.herokuapp.com/api/v1/users/updateMyPassword`,
      data
    });
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}
