import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const { username } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  
  const redirectMessage = location.state?.message;
  const from = location.state?.from;

  const style = {
    minHeight: "calc(100vh - 200px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const handleContinueOrdering = () => {
    if (from?.pathname) {
      navigate(from.pathname, { replace: true });
    } else {
      navigate("/menu");
    }
  };

  return (
    <div className="my-10 text-center" style={style}>
      <h1 className="mb-8 space-y-2 font-semibold">
        <p className="text-4xl tracking-wider uppercase">The best pizza</p>
        <p className="text-2xl tracking-wide text-yellow-500">
          Straight out of the oven, straight to you.
        </p>
      </h1>

      {redirectMessage && (
        <div className="mb-6 rounded border border-red-400 bg-red-100 p-4 text-red-700">
          {redirectMessage}
        </div>
      )}

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button onClick={handleContinueOrdering} type="primary">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
