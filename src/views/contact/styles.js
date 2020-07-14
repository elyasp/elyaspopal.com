import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  background-color: #d6f5ff;
  padding: 30px 50px;
  overflow: hidden;
  height: fit-content;
  justify-content: space-between;
  padding: 0;
`;

export const FormWrap = styled.div`
  display: flex;
  background-color: lightblue;
  /* padding: 30px 50px; */
  min-height: fit-content;
  width: 55%;
  justify-content: center;
`;

export const ContactWrap = styled.p`
  height: 100vh;
  display: flex;
  margin: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
