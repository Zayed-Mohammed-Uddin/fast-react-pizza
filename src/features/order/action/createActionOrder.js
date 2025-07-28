import { redirect } from "react-router-dom";
import { createOrder } from "../../../services/apiRestaurant";
import store from "../../../store/store";
import { addAddress } from "../../user/slice/userSlice";
import { clearCart } from "../../cart/slice/cartSlice";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const isValidFirstName = (str) => {
  return /^[a-zA-Z\s\-']{2,50}$/.test(str.trim());
};

const isValidAddress = (str) => {
  return /^[a-zA-Z0-9\s\-,.#/]{5,200}$/.test(str.trim());
};

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = {};

  if (!data.customer || !data.customer.trim()) {
    errors.customer = "Name is required";
  } else if (!isValidFirstName(data.customer)) {
    errors.customer =
      "Please enter a valid name (2-50 characters, letters only)";
  }

  if (!data.phone || !data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!isValidPhone(data.phone)) {
    errors.phone = "Invalid phone number format";
  }

  if (!data.address || !data.address.trim()) {
    errors.address = "Address is required";
  } else if (!isValidAddress(data.address)) {
    errors.address = "Please enter a valid address (5-200 characters)";
  }

  if (Object.keys(errors).length > 0) return { errors };
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  try {
    const newOrder = await createOrder(order);
    store.dispatch(addAddress(data.address));
    store.dispatch(clearCart());
    return redirect(`/order/${newOrder.id}`);
  } catch (error) {
    return { errors: { general: error.message } };
  }
}
