import Axios from "axios";

Axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`
};

async function getAllTours() {
  try {
    const response = await Axios.get(
      `https://dztours-api.herokuapp.com/api/v1/tours`
    );
    console.log(response);
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

async function getTour(id) {
  try {
    const response = await Axios.get(
      `https://dztours-api.herokuapp.com/api/v1/tours/${id}`
    );
    console.log(response);
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

async function getMyTours() {
  try {
    const response = await Axios.get(
      `https://dztours-api.herokuapp.com/api/v1/bookings/my-tours`
    );
    console.log(response);
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

export default {
  getAllTours,
  getTour,
  getMyTours
};
