import React, { useCallback, useState } from "react";
import styled from "styled-components";

export const Info = () => {
  const [pressed, setPressed] = useState<boolean>(false);

  const onMouseDown = useCallback(() => {
    setPressed(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setTimeout(() => {
      setPressed(false);
    }, 200);
  }, []);

  return (
    <Main>
      <Button onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        <Span className={pressed ? "press" : ""}>Press me</Span>
      </Button>
    </Main>
  );
};

const Span = styled.span`
  transition-duration: 0.3s;
  cursor: pointer;
  font-size: 24px;
  text-transform: uppercase;

  transform: translateY(-6px);
  background-color: #aa4682;
  flex: 1;
  padding: 20px;
  border-radius: 20px;
  &:hover {
    transform: translateY(-10px);
  }

  &.press {
    transition-duration: 0.1s;
    transform: translateY(2px);
    box-shadow: inset 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
    padding-bottom: 19px;
  }
`;

const Button = styled.button`
  border: none;
  display: flex;
  border-radius: 20px;
  padding: 0;
  color: ${({ theme }) => theme.card.bg};

  background: linear-gradient(
    90deg,
    rgb(32, 20, 28) 0%,
    rgb(61, 37, 57) 14.06%,
    rgb(61, 37, 57) 83.85%,
    rgb(32, 20, 28) 100%
  );
`;

const Main = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  padding-bottom: 50px;
`;
