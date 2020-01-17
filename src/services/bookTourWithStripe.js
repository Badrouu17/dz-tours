import Axios from "axios";

Axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`
};

// const stripe = window.Stripe("pk_test_Pv1zbmGlCQromCS7S2vtPQP600FwakwDgE");

export const bookTour = async (tourId, stripe) => {
  try {
    // 1) Get checkout session from API
    const response = await Axios.get(
      `https://dztours-api.herokuapp.com/api/v1/bookings/checkout-session/${tourId}`
    );

    // 2) Create checkout form + ganre credit card
    await stripe.redirectToCheckout({
      sessionId: response.data.session.id
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};
