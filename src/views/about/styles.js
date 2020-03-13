import styled from "styled-components";

export const Outer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: #b8c9e5;
`;

export const Photo = styled.img`
  max-height: 100vh;

  @media (max-width: 749px) {
    max-height: 70vh;
  }
`;

export const Paragraph = styled.p`
  margin: 5%;

  h1 {
    font-size: 40px;
  }
`;
