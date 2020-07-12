import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactWrap = styled.p`
  height: 100vh;
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #d6f5ff;
`;

export const Title = styled.div`
  * {
    font-family: "Poppins";
    color: #3c53c7;
    font-weight: 200;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
  }

  h2 {
    font-size: 3em;
  }
  h5 {
    font-size: 1.7em;
  }
`;

export const Contacts = styled.div`
  max-width: 60%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    padding: 1em;
    img {
      min-width: 100px;
      max-width: 101px;
  }
`;
