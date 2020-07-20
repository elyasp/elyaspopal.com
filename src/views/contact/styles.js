import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  background-color: black;
  padding: 30px 50px;
  overflow: hidden;
  height: inherit;
  justify-content: space-between;
  padding: 0;
  border-top: solid 1em #350aab;
`;

export const FormWrap = styled.div`
  display: flex;
  background-color: #75a9d9;
  /* padding: 30px 50px; */
  min-height: fit-content;
  width: 50vw;
  justify-content: center;
`;

export const ContactWrap = styled.div`
  width: 50vw;
  min-height: 100%;
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Contacts = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
`;

export const Contact = styled.div`
  margin: 1em 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    img {
      transition: 100ms ease-in-out;
      filter: none;
    }
  }

  img {
    filter: grayscale(100%) brightness(60%);
    margin: 0.5em;
    min-width: 2em;
    max-width: 2em;
    transition: 100ms ease-in-out;
  }
`;
