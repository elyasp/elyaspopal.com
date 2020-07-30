import styled from "styled-components";
import { media } from "../../styles/media";

export const Outer = styled.section`
  height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: #1c0161;
  overflow: hidden;
  cursor: default;

  @media (max-width: 549px) {
    flex-direction: column;
    max-width: 100vw;
    justify-content: center;
  }
`;

export const Photo = styled.img`
  /* border-top: solid 1em #350aab;
  border-bottom: solid 1em #350aab; */
  max-height: 100vh;

  @media (max-width: 749px) {
    display: none;
  }
`;

export const Paragraph = styled.p`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #1c0161;
  transform: skew(9deg);
  color: #74a9d9;

  h1 {
    margin: 0.5em;
    position: relative;
    color: white;
    font-size: 80px;
    font-weight: 200;
  }

  &:after {
    content: "";
    width: 7em;
    position: relative;

    &:after {
      content: "";
      width: 99em;
      position: relative;
    }
  }

  @media (max-width: 749px) {
    max-width: 100vw;
    justify-content: center;
    transform: skew(-9deg);
  }
`;

export const Diagonal = styled.div`
  display: flex;
  align-items: center;
  height: inherit;
  margin-right: -9em;
  transform: skew(-9deg);
  background-color: #1c0161;
  overflow: hidden;
  padding: 0 5em;
  border-right: solid 1em #350aab;

  &:after {
    content: "";
    width: 7em;
    position: relative;
  }

  @media (max-width: 749px) {
    /* display: none; */
    transform: skew(9deg);
    margin-right: 0;
  }
`;

export const PortraitWrap = styled.div`
  /* border: green; */
`;
