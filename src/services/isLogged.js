import Axios from "axios";

Axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`
};

export async function isLogged() {
  try {
    const response = await Axios.get(
      `https://dztours-api.herokuapp.com/api/v1/users/isLogged`
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}
