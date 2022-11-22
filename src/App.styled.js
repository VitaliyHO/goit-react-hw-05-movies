import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 2px solid #676362;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export const Main = styled.main`
  padding: 20px 10px;
  text-align: center;
`;

export const FlexBox = styled.div`
  display: flex;
  padding: 10px;
`;

export const Box = styled.div`
  padding: 5px 20px;
`;

export const BorderBox = styled.div`
  border-bottom: 2px solid grey;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
`;

export const Link = styled(NavLink)`
  padding: 8px 12px;
  margin-right: 15px;
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    color: #3a7223;
  }

  &.active {
    background: #ff5733;
  }
`;

export const ListLink = styled(NavLink)`
  text-decoration: none;
  color: #2e2e2e;
`;

export const Button = styled.button`
  display: block;
`;

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 70px;
`;

export const Li = styled.li`
  &:nth-child(4n + 1) img {
    transform: perspective(400px) rotateY(10deg) rotateX(5deg);

    transition-property: rotateY();
    transition-duration: 500ms;
    transition-timing-function: linear;
    transition-delay: 0;

    &:hover {
      transform: rotateY(0deg);
    }
  }

  &:nth-child(4n + 2) img {
    transform: perspective(400px) rotateY(5deg) scale(0.92) rotateX(5deg);

    transition-property: rotateY() scale();
    transition-duration: 500ms;
    transition-timing-function: linear;
    transition-delay: 0;

    &:hover {
      transform: rotateY(0deg) scale(1);
    }
  }

  &:nth-child(4n + 3) img {
    transform: perspective(400px) rotateY(-5deg) scale(0.92) rotateX(5deg);

    transition-property: rotateY() scale();
    transition-duration: 500ms;
    transition-timing-function: linear;
    transition-delay: 0;

    &:hover {
      transform: rotateY(0deg) scale(1);
    }
  }

  &:nth-child(4n) img {
    transform: perspective(400px) rotateY(-10deg) rotateX(5deg);

    transition-property: rotateY();
    transition-duration: 500ms;
    transition-timing-function: linear;
    transition-delay: 0;

    &:hover {
      transform: rotateY(0deg);
    }
  }
`;

export const ImgList = styled.img`
  display: block;
  width: 100%;
  height: 90%;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 1);

  &:hover {
    box-shadow: 0px 0px 25px 0px rgba(255, 87, 51, 1);
  }
`;

export const IMG = styled.img`
  display: block;
  width: 300px;
`;
