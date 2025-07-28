import { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "./slice/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;

    dispatch(addName(username));
    setUsername("");

    const from = location.state?.from?.pathname || "/menu";
    navigate(from, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm-600 mb-4 text-sm md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        className="mb-6 h-10 w-72 border-b-2 outline-0"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
