import styled from "styled-components";

export const MainPortfolio = styled.div`
  background: #54c3ff;
`;

export const Work = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  height: inherit;
  width: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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

export const IconLong = styled.div`
  max-height: 70vh;
  max-width: 40vw;
  transform: perspective(10px) rotate(-1deg);

  img {
    height: 80vh;

    transition: all 0.3s ease;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);

    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);
      transform: perspective(900px) rotateX(2deg) rotateY(-4deg)
        translateZ(20px) scale(1.05);
    }
  }
`;

export const Text = styled.div`
  text-align: start;
  color: white;
  width: 70%;
  font-weight: 200;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

export const Tech = styled.div`
  display: flex;
  width: 70%;
  flex-flow: row wrap;
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
    margin: 0.5em;
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
