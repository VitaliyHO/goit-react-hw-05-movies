// import { Link, NavLink } from "react-router-dom";
import { Header, Link } from "../App.styled";

export const Navigation = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movie</Link>
      </nav>
    </Header>
  );
};
