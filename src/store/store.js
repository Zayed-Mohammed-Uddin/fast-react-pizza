import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/slice/userSlice";
import cartReducer from "../features/cart/slice/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
