import styled, { keyframes, css } from "styled-components";
import { media } from "../../styles/index";

const navbarAnimation = keyframes`
  0% {
      top: -30px;
  }
  50% {
      top: -15px;
  }
  100% {
      top: 0px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  z-index: 99;
  text-decoration-style: none;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "hsla(27, 100%, 1%, 0.75)" : "hsla(27, 100%, 1%, 0.45)"};
  position: ${({ isScrolled }) => (isScrolled ? "fixed" : "absolute")};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12);

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      animation: 0.3s ${navbarAnimation} ease;
    `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: 40vw;
  justify-content: space-evenly;
  list-style-type: none;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 50vw;
`;

export const Hole = styled.div`
  margin: 1em;
`;
