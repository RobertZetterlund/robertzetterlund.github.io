import React from "react";
import styled from "styled-components";
import {
  Body,
  Card,
  ImageContainerCss,
  Picture,
  Text,
  Company,
} from "./card.styled";

import difyImg from "./dify.png";

export const Dify = () => {
  return (
    <Card>
      <ImageContainer>
        <Company>
          @
          <a href="https://www.opera.com/" rel="noreferrer" target="_blank">
            Opera
          </a>
        </Company>
        <Picture src={difyImg} alt="A picture of me" />
      </ImageContainer>
      <Text>
        <Body>
          React Native development on{" "}
          <a
            href="https://cashback.getdify.com/es/en/"
            rel="noreferrer"
            target="_blank"
          >
            dify
          </a>
        </Body>
        <ul>
          <li>Redux Toolkit 🧰</li>
          <li>GA and Firebase 📈</li>
          <li>Testing with Detox 🧪</li>
          <li>Typescript 🤖</li>
        </ul>
      </Text>
    </Card>
  );
};

const ImageContainer = styled.div`
  ${ImageContainerCss};

  background: rgb(192, 234, 0);
  background: linear-gradient(
    45deg,
    rgba(0, 217, 84, 1),
    rgba(192, 234, 0, 1),
    rgba(0, 217, 84, 1),
    rgba(0, 217, 84, 1),
    rgba(192, 234, 0, 1)
  );
  background-size: 400% 400%;
`;
