import { Link, useLocation } from "react-router-dom";
import "../NavBar/NavBar.css";

const NavBar = () => {
  const location = useLocation();

  let linksToShow;
  if (location.pathname === "/home") {
    linksToShow = (
      <>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </>
    );
  } else if (location.pathname === "/authorization") {
    linksToShow = (
      <>
        <Link to="/home">Home</Link>
        <Link to="/">Regrister</Link>
      </>
    );
  } else if (location.pathname === "/") {
    linksToShow = (
      <>
        <Link to="/home">Home</Link>
        <Link to="/authorization">Log in</Link>
      </>
    );
  }

  return (
    <div className="navbar">
      <div className="links">{linksToShow}</div>
    </div>
  );
};

export default NavBar;
