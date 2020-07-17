import styled from "styled-components";

export const Outer = styled.section`
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #b8c9e5;
  overflow: hidden;
`;

export const Photo = styled.img`
  max-height: 100vh;

  @media (max-width: 749px) {
    max-height: 70vh;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 3em;
  height: inherit;
  font-size: 1.4em;
  max-height: inherit;
  text-align: center;
  h1 {
    margin: 0.5em;
    position: relative;
    color: rgba(0, 38, 54, 0.5);
    font-size: 80px;
    font-weight: 200;
  }
`;
