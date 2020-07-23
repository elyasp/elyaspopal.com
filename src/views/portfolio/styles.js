import styled from "styled-components";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background: white;
  padding: 4em 0;
  padding-bottom: 5em;

  h1 {
    display: flex;
    justify-content: center;
    color: #242424;
    text-transform: uppercase;
    width: 100%;
    letter-spacing: 0.3em;
    margin: 30px;
    font-weight: 200;
    font-size: 10em;

    ::selection {
      color: red;
      background: purple;
    }
  }
`;

export const Title = styled.div`
  color: white;
  height: 20vh;
`;

export const Projects = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Logo = styled.div`
  position: absolute;
  width: 100%;
  height: inherit;
  background: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;

export const Tech = styled.div`
  height: 30%;
  display: flex;
  flex-flow: row wrap;
  text-decoration-line: overline;

  h5 {
    margin-right: 1em;

    ::selection {
      color: red;
      background: purple;
    }
  }
`;

export const Description = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  color: white;
  padding: 2em;
  height: inherit;
  visibility: hidden;

  p {
    height: 70%;

    ::selection {
      color: red;
      background: purple;
    }
  }
`;

export const Project = styled.div`
  width: 500px;
  height: 317px;
  margin: 1em;
  overflow: hidden;
  position: relative;

  &:hover ${Logo} {
    filter: blur(8px);
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  &:hover ${Description} {
    background-color: rgba(0, 0, 0, 0.4);
    visibility: visible;
  }
`;
