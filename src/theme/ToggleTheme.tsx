import React, { useState } from "react";

import styled, { css, keyframes } from "styled-components";
import { usePreferredTheme } from "./usePreferredTheme";
import { FaTimes } from "react-icons/fa";

export const ToggleTheme = ({
  setTheme,
  theme,
}: {
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  theme: "light" | "dark";
}) => {
  const [themeInfo, setThemeInfo] = useState<
    "prefersLight" | "info" | undefined
  >();

  const [shownInfo, setShownInfo] = useState<boolean>(false);
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  usePreferredTheme({
    theme,
    toggleTheme: ({ reason }) => {
      if (!shownInfo) {
        if (reason === "prefersLight" && theme !== "light") {
          setTheme("light");
        }

        setThemeInfo(reason);
      }
    },
  });

  return (
    <Wrapper>
      <Toggle.Container
        onClick={() => {
          setTheme((old) => (old === "dark" ? "light" : "dark"));
          setShownInfo(true);
          setHasClicked(true);
        }}
      >
        <Toggle.Track>
          <Toggle.Icon>💡</Toggle.Icon>
          <Toggle.Icon>🦉</Toggle.Icon>
          <Ball $light={theme === "light"} />
        </Toggle.Track>
      </Toggle.Container>
      {themeInfo && !hasClicked && (
        <ThemeInfo $shownInfo={shownInfo}>
          {themeInfo === "prefersLight" && (
            <ThemeText>
              I detected you prefer light theme.
              <br />
              ... why?
            </ThemeText>
          )}
          {themeInfo === "info" && <ThemeText>How about some light?</ThemeText>}
          <ThemeCross onClick={() => setShownInfo(true)} />
        </ThemeInfo>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  10% {
    opacity:1;
  }
  90% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity:1;
  }
  10% {
    opacity:0;
  }
  100% {
    opacity:0;
  }
`;

const ThemeCross = styled(FaTimes)`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 5px;
  height: 8px;
  width: 8px;
  background-color: gray;
  border-radius: 50%;
  transition: transform 250ms ease;
  fill: ${({ theme }) => theme.accent};

  &:focus,
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const ThemeInfo = styled.div<{ $shownInfo: boolean }>`
  position: relative;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  border-radius: 25px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  animation: ${({ $shownInfo }) => ($shownInfo ? fadeOut : fadeIn)} 4s ease
    forwards;
`;

const ThemeText = styled.div`
  padding: 12px 18px;
`;

const ballLeftCss = css`
  left: 3px;
`;

const ballRightCss = css`
  left: 37px;
`;

const Ball = styled.div<{ $light: boolean }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  background-color: white;
  transition: 0.33s;
  ${({ $light }) => ($light ? ballLeftCss : ballRightCss)}
`;

const Toggle = {
  Container: styled.div`
    position: relative;
    &:hover ${Ball} {
      box-shadow: 0 0 3px 2px #16c172;
    }
    cursor: pointer;
    align-self: flex-end;
  `,
  Icon: styled.div`
    align-items: center;
    display: flex;
    height: 8px;
    justify-content: center;
    width: 8px;
  `,
  Track: styled.div`
    border-radius: 20px;
    background-color: gray;
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    align-items: center;
  `,
};
