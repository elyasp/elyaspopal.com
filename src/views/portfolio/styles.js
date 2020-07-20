import styled from "styled-components";

export const MainPortfolio = styled.div`
  display: flex;
  justify-content: center;
  min-height: fit-content;
  background: black;
`;

export const Projects = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 4em;
`;
export const Title = styled.div`
  color: white;

  height: 20vh;
`;

export const Project = styled.div`
  width: 500px;
  height: 317px;
  margin: 1em;
  border: solid 3px black;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
    0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.img});
  background-position: center;
  background-size: cover;

  div {
    display: none;
  }

  &:hover,
  &:focus {
    filter: blur(8px);
    transform: scale(1.1);
    transition: all 0.3s ease;

    div {
      display: flex;
      align-items: center;
      display: block;
      filter: none;
      transform: none;
      transition: none;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      height: inherit;
    }
  }
`;
