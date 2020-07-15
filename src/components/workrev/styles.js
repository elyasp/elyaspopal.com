import styled from "styled-components";

export const MainPortfolio = styled.div`
  height: 30em;

  background: #0887cb;
`;

export const Work = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Description = styled.div`
  display: flex;
  height: 100%;
  width: 75%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  color: white;
  font-size: 48px;
  margin: 0.6em 0;
  width: 30vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 400;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

export const Icon = styled.div`
  max-height: 50vh;
  max-width: 70vw;
  transform: perspective(10px) rotate(1deg);

  img {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12);
    height: 45vh;
    width: 45vw;
    margin: 2em;
    transition: all 0.3s ease;
    &:hover {
      transform: perspective(900px) rotateX(2deg) rotateY(4deg) translateZ(20px)
        scale(1.1);
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  div {
    width: 70%;
    font-weight: 100;
    text-align: end;
  }
`;

export const Oppose = styled.div``;

export const Tech = styled.div`
  display: flex;
  width: inherit;
  flex-flow: row-reverse wrap;
  transition: all 1s ease;
  -webkit-transition: all 0.8s ease;

  button {
    transition: 500ms;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border: none;
    padding: 1em;
    margin-left: 2em;
    margin-bottom: 2.2em;
    font-size: 1em;
    font-weight: 800;

    &:hover {
      border-top-left-radius: 20px;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
`;
