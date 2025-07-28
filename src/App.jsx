import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import Error from "./ui/Error";
import CreateOrder from "./features/order/CreateOrder";
import { action as createOrderAction } from "./features/order/createActionOrder";

import { menuLoader } from "./features/menu/loader/menuLoader";
import { orderLoader } from "./features/order/loader/orderLoader";

const router = createBrowserRouter([
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
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
