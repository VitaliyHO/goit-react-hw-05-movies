import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "../App.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movie</Link>
          </nav>
        </Container>
      </Header>
      <Suspense fallback={<p>Loading page...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
