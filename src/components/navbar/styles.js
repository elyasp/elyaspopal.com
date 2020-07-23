import styled, { keyframes, css } from "styled-components";
import { media } from "../../styles/media";

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
  z-index: 1;
  text-decoration-style: none;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "rgba(2, 0, 102, 0.7)" : "hsla(27, 100%, 1%, 0.45)"};
  position: ${({ isScrolled }) => (isScrolled ? "fixed" : "absolute")};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12);

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      animation: 0.3s ${navbarAnimation} ease;
    `}

  /* ${media.sm(`
    display: none;
  `)} */
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: 30vw;
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

export const Home = styled.div`
  min-height: fit-content;
`;

export const Logo = styled.div`
  margin: 0 2em;
  width: 43px;
  height: 43px;
  background: url(${(props) => props.img});
  cursor: pointer;
  background-position: center;
  background-size: cover;
`;
