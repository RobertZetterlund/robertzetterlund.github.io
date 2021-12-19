import React from "react";
import styled, { keyframes } from "styled-components";

import {
  backgroundTransitionCss,
  colorTransitionCss,
} from "../../shared/transition.styled";

const TEXT = ", I'm Robert Zetterlund";
const LENGTH = TEXT.length;
const TYPING_SPEED = "3s";
export const Welcome = () => {
  return (
    <Main>
      <Name>
        {`Hi`}
        <TypingSpan>{TEXT}</TypingSpan>
      </Name>
    </Main>
  );
};

const blink = keyframes`
  0% {
    opacity:0;
  }

  50% {
    opacity:1;
  }

  100% {
    opacity:1
  }
`;

const type = keyframes`
  to {
    left: 100%;
  }
`;

const Name = styled.h1`
  position: relative;
  ${colorTransitionCss};
  color: ${({ theme }) => theme.accent};
  width: max-content;
  font-size: clamp(1rem, 4vw, 3rem);
`;

const TypingSpan = styled.span`
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    ${backgroundTransitionCss};
  }

  /* Blinking cursor */
  &::after {
    margin-left: 1px;
    width: 3px;
    height: 100%;
    background-color: ${({ theme }) => theme.accent};
    opacity: 1;
    animation: ${blink} 1.5s steps(1) infinite,
      ${type} ${TYPING_SPEED} steps(${LENGTH}) 1s forwards;
  }

  /* Type text */
  &::before {
    background-color: ${({ theme }) => theme.background};
    height: 100%;
    animation: ${type} ${TYPING_SPEED} steps(${LENGTH}) 1s forwards;
  }
`;

const Main = styled.div`
  display: grid;
  place-items: center;
  position: relative;
`;
