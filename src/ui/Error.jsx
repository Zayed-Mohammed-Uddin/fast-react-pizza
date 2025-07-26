import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  const style = {
    minHeight: "calc(100vh - 100px)",
  }

  return (
    <div className="flex flex-col self-center items-center justify-center space-y-4 text-center" style={style}>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <Button type="primary" onClick={() => navigate(-1)}>
        &larr; Go back
      </Button>
    </div>
  );
}

export default Error;
