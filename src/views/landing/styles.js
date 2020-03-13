import styled, { keyframes } from "styled-components";
import { repeatBoxShadows } from "./helpers";

const starAnimation = keyframes`
  from	{
    transform: translateY(0);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const mainBlock = keyframes`
 0% {
    width: 0%;
    left: 0;

  }
  40% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
`;

const mainFadeIn = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const popIn = keyframes`
   0% {
    width: 0px;
    height: 0px;
    background: #ffdf61;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 30px;
    height: 30px;
    background: -webkit-linear-gradient(left, rgba(255,234,0,1) 0%, rgba(235,102,0,1) 100%);
    opacity: 1;
    bottom: 65px;
  }
   65% {
      width: 21px;
      height: 21px;
      bottom: 0px;
      width: 35px
   }
   80% {
      width: 30px;
      height: 30px;
      bottom: 40px
   }
  100% {
    width: 21px;
    height: 21px;
    background: -webkit-linear-gradient(left, rgba(255,234,0,1) 0%, rgba(235,102,0,1) 100%);
    border: 0px solid #222;
    bottom: 27px;
  }
`;

const secBlock = keyframes`
 0% {
    width: 0%;
    right: 0;

  }
  50% {
    width: 100%;
    right: 0;

  }
  100% {
    width: 0;
    right: 100%;
  }
`;

const secFadeIn = keyframes`
    0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

export const Star = styled.p`
  width: ${({ size: { width } }) => width};
  height: ${({ size: { height } }) => `${height}`};
  box-shadow: ${({ starFrequency }) => repeatBoxShadows(starFrequency)};
  animation: ${starAnimation} ${({ animationSpeed }) => ` ${animationSpeed}s`}
    linear infinite;

  &:after {
    content: " ";
    width: ${({ size: { width } }) => `${width}`};
    height: ${({ size: { height } }) => `${height}`};
    background: transparent;
    box-shadow: ${({ starFrequency }) => repeatBoxShadows(starFrequency)};
  }
`;

export const Main = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(5, 75, 140, 1) 0%,
    rgba(0, 0, 0, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );
  color: #8dfccd;
`;

export const Intro = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Hole = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  max-height: 70vh;

  transform: perspective(10px) rotate(-1deg);

  img {
    height: 25vh;
  }
`;

export const Name = styled.p`
  font-family: "Poppins";
  color: #fff;
  font-size: 66px;
  font-weight: 900;
  animation: ${mainFadeIn} 2s forwards;
  animation-delay: 1.6s;
  opacity: 0;
  display: flex;
  align-items: flex-start;
  position: relative;
  transition: 1s;

  &:hover {
    transform: scale(1.09, 1.09);
    transition: 1s;
  }

  span {
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background: #ffb510;
    animation: ${popIn} 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    animation-delay: 2s;
    margin-left: 50px;
    margin-top: -10px;
    position: absolute;
    bottom: 5px;
    right: -20px;
  }
`;

export const Role = styled.div`
  width: 200%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-top: -10px;

  div {
    width: 0%;
    height: inherit;
    background: -webkit-linear-gradient(
      left,
      rgba(158, 255, 200, 1) 0%,
      rgba(4, 158, 201, 1) 100%
    );
    position: absolute;
    animation: ${secBlock} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) backwards;
    animation-delay: 2s;
    display: flex;
  }

  p {
    animation: ${secFadeIn} 2s forwards;
    animation-delay: 3.2s;
    opacity: 0;
    font-weight: 100;
    font-family: "Poppins";
    color: #ffffff;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 10px;
    width: 200%;
    text-align: center;
  }
`;

export const Title = styled.div`
  width: 200%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
`;

export const Span = styled.span`
  width: 0%;
  height: inherit;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 217, 0, 1) 0%,
    rgba(255, 102, 0, 1) 100%
  );
  position: absolute;
  animation: ${mainBlock} 2.3s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  display: flex;
`;
