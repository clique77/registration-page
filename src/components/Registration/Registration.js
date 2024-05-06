import { useState } from "react";
import "../Registration/Registration.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const history = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    const user = { username, password, email, firstName, lastName };
    setTimeout(() => {
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(() => {
          setIsPending(false);
          console.log("Successfuly logged in");
          history("/authorization");
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit} method="get" acceptCharset="UTF-8">
        <div className="password-input">
          <label>Enter Your First Name</label> <br />
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            required
            placeholder="Enter first name"
          />
        </div>
        <div className="lastname-input">
          <label>Enter Your Last Name</label> <br />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            required
            placeholder="Enter last name"
          />
        </div>
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
        <div className="email-input">
          <label>Enter Your Email</label> <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter email"
          />
        </div>
        <div className="password-input">
          <label>Enter Your Password</label> <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            minlength="6"
            maxlength="20"
            required
            placeholder="Enter password"
          />
        </div>
        <div className="button-link">
          {!isPending && <button>Register</button>}
          {isPending && <img src="" className="loading-image" />}
        </div>
      </form>
    </div>
  );
};

export default Registration;
