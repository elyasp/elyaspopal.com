import styled from "styled-components";
import { media } from "../../styles/media";
import { NavLink as NavLinkComponent } from "../navLink";

export const Hamburger = styled.button`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: none;
  margin-left: 30px;
  background-color: black;

  ${media.md(`
    display: none;
  `)}
`;

export const NavLink = styled(NavLinkComponent)`
  margin-bottom: 15px;
  &:last-child {
    margin: 0;
  }
`;
export const HamburgerInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 28px;
  height: 28px;
  position: absolute;

  cursor: pointer;
  :focus {
    outline: none;
  }
  &:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(9px, -3px);
  }

  &:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  :checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(9px, 6px);
  }

  &:checked ~ ul {
    transform: none;
    display: flex;
  }
`;

export const Bars = styled.span`
  width: 30px;
  height: 2px;
  border-top: 2px solid rgba(255, 255, 255, 1);
  margin: 4px 0;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.2s ease;
  position: relative;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`;

export const Navigation = styled.ul`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  color: white;
  list-style-type: none;
  opacity: ${({ isOpen }) => (isOpen ? "0.85" : "0")};
  transform-origin: 0% 0%;
  transition: all 0.3s ease;
  margin: 0;
  padding: 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  list-style-type: none;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  width: 100vw;
  position: fixed;
  background-color: black;
  ${media.md(`
        display: none;
    `)}
`;
