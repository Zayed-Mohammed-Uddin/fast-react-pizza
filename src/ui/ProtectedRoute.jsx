import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const username = useSelector((state) => state.user.username);
  const location = useLocation();

  // If no username, redirect to home with a message about needing to enter name
  if (!username || username.trim() === "") {
    return (
      <Navigate
        to="/"
        state={{
          from: location,
          message: "Please enter your name to access this page",
        }}
        replace
      />
    );
  }

  // If authenticated, render the child routes
  return <Outlet />;
}

export default ProtectedRoute;
