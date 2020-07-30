import styled from "styled-components";
import { media } from "../../styles/media";

export const Page = styled.div`
  display: flex;
  background-color: white;
  padding: 30px 50px;
  overflow: hidden;
  height: inherit;
  justify-content: space-between;
  padding: 0;

  /* ${media.md(`
  flex-direction: column;
  `)} */
`;

export const FormWrap = styled.div`
  display: flex;
  background-color: #75a9d9;
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
    color: #1c0161;
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
