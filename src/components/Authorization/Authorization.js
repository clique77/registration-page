import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Registration/Registration.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);
    setError(null);

    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:8000/users");
        const data = await response.json();

        const matchedUser = data.find(
          (user) => user.username === username && user.password === password
        );

        if (matchedUser) {
          alert("Successfully logged in!");
          setIsPending(false);
          navigate("/home");
        } else {
          setError("Invalid username or password");
          setIsPending(false);
        }
      } catch (error) {
        console.error(error);
        setError("Failed to log in");
        setIsPending(false);
      }
    }, 1000);
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit} method="post" acceptCharset="UTF-8">
        <div className="username-input">
          <label>Enter Your Username</label> <br />
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            required
            placeholder="Enter username"
          />
        </div>
        <div className="password-input">
          <label>Enter Your Password</label> <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter password"
          />
        </div>
        <div className="button-link">
          {!isPending && <button>Login</button>}
          {isPending && <img src="" className="loading-image" />}
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default Login;
