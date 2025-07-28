import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import Error from "./ui/Error";
import Spinner from "./ui/Spinner";
import CreateOrder from "./features/order/CreateOrder";
import { action as createOrderAction } from "./features/order/action/createActionOrder";
import { action as updateOrderAction } from "./features/order/action/updateOrderAction";

import { menuLoader } from "./features/menu/loader/menuLoader";
import { orderLoader } from "./features/order/loader/orderLoader";

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/cart",
              element: <Cart />,
              errorElement: <Error />,
            },
            {
              path: "/order/new",
              element: <CreateOrder />,
              action: createOrderAction,
            },
            {
              path: "/order/:id",
              element: <Order />,
              loader: orderLoader,
              action: updateOrderAction,
            },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  },
);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Spinner />}
      hydrationData={{}}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
