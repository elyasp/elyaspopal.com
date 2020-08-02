import styled from "styled-components";

export const ListItem = styled.li`
  cursor: pointer;
  padding: 0.35em;
  color: #fff;
  font-weight: 500;
  font-family: "Poppins";
  margin: 0 3em;

  > a {
    text-decoration: none;
  }

  background: -webkit-linear-gradient(
    45deg,
    rgba(255, 217, 0, 1) 5%,
    rgba(255, 102, 0, 1) 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0.1em;
  background-position: 0 88%;
  transition: background-size 0.45s ease;
  &:hover {
    background-size: 100% 88%;
    color: black;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  margin: 10px;
  height: inherit;

  img {
    max-width: 45px;
    border-radius: 2px;
  }
`;
