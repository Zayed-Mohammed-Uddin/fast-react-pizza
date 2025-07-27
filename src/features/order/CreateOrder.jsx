import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useActionData, useNavigation } from "react-router-dom";

import Button from "../../ui/Button";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";

function CreateOrder() {
  const navigation = useNavigation();
  const [withPriority, withSetPriority] = useState(false);
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const {
    username,
    address,
    status: addressStatus,
    error: addressError,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;

  const style = {
    minHeight: "calc(100vh - 200px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const orderInput = `block w-64 border-b-2 transition-all duration-200 focus:w-72 focus:outline-none`;

  if (cart.length === 0) {
    return (
      <div className="my-10 text-center" style={style}>
        <h1 className="mb-4 text-3xl font-bold">Your cart is empty!</h1>
        <p>Add some delicious pizzas to your cart first.</p>
      </div>
    );
  }

  function handleGetLocation() {
    dispatch(fetchAddress());
  }

  return (
    <div className="my-8">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Ready to order? Let's go!
      </h1>

      <div className="mb-6 text-center">
        <p className="text-lg font-semibold">
          Total: ${(totalCartPrice + priorityPrice).toFixed(2)}
        </p>
      </div>

      {formErrors?.errors?.general && (
        <p className="error mb-4 text-center">⚠️ {formErrors.errors.general}</p>
      )}

      <Form
        method="POST"
        className="flex flex-col items-center justify-center gap-y-6"
      >
        <div>
          <label htmlFor="customer">First Name</label>
          <input
            type="text"
            id="customer"
            name="customer"
            defaultValue={username}
            required
            className={orderInput}
          />
          {formErrors?.errors?.customer && (
            <p className="error">⚠️ {formErrors.errors.customer}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={orderInput}
          />
          {formErrors?.errors?.phone && (
            <p className="error">⚠️ {formErrors.errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            defaultValue={address}
            required
            className={orderInput}
            placeholder={
              addressStatus === "loading"
                ? "Getting your location..."
                : "Enter your address"
            }
          />
          {formErrors?.errors?.address && (
            <p className="error">⚠️ {formErrors.errors.address}</p>
          )}
          {addressError && <p className="error">⚠️ {addressError}</p>}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={(e) => withSetPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div className="space-x-4">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button
            onClick={handleGetLocation}
            type="order"
            disabled={addressStatus === "loading"}
          >
            {addressStatus === "loading"
              ? "Getting location..."
              : "Get Location"}
          </Button>
          <Button disabled={isSubmitting} type="order" htmlType="submit">
            {isSubmitting ? "Ordering..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
