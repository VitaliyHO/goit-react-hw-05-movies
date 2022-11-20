import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Link } from "../App.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movie</Link>
        </nav>
      </Header>
      <Suspense fallback={<p>Loading page...</p>}>
        <Outlet/>
      </Suspense>
    </>
  );
};

export default SharedLayout;