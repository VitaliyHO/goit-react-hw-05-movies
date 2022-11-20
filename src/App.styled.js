import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #000;
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

export const Link = styled(NavLink)`
  padding: 8px 12px;
  color: #000;
  text-decoration: none;

  &:hover {
    color: red;
  }

  &.active {
    background: purple;
  }
`;

export const Button = styled.button`
  display: block;
`;

export const IMG = styled.img`
  display: block;
  width: 300px;
`;
