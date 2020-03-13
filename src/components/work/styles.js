import styled from "styled-components";

export const MainPortfolio = styled.div`
  background: #054b8c;
`;

export const Title = styled.div`
  color: white;
  font-size: 48px;
  margin: 0.6em 0;
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 200;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

export const Work = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  height: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.div`
  max-height: 50vh;
  max-width: 70vw;
  transform: perspective(10px) rotate(-1deg);

  img {
    height: 35vh;
    width: 35vw;
    margin: 2em;
    transition: all 0.3s ease;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12);
    &:hover {
      transform: perspective(900px) rotateX(2deg) rotateY(-4deg)
        translateZ(20px) scale(1.1);
    }
  }
`;

export const Text = styled.div`
  text-align: start;
  color: white;
  width: 70%;
  font-weight: 200;
`;

export const Tech = styled.div`
  div {
    display: flex;
    max-width: inherit;
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
      margin-right: 2em;
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
  }
`;
