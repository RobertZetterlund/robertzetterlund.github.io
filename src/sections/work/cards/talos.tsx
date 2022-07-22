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
import talosImg from "./talos.png";

export const Talos = () => {
  return (
    <Card>
      <ImageContainer>
        <Company>
          @
          <a href="https://talos.com/" rel="noreferrer" target="_blank">
            Talos
          </a>
        </Company>
        <Picture
          src={talosImg}
          alt="The Talos logo, a spacious 3x3 grid of filled black squares. The 3 squares diagonally from the top left to the bottom right are omitted."
        />
      </ImageContainer>
      <Text>
        <Body>
          {"Engineering at "}
          <a href="https://talostrading.com/" rel="noreferrer" target="_blank">
            talostrading.com
          </a>
        </Body>
        <ul>
          <li>React 🌀</li>
          <li>RxJS 🐬</li>
          <li>Typescript 🤖</li>
        </ul>
      </Text>
    </Card>
  );
};

const ImageContainer = styled.div`
  ${ImageContainerCss};
  background: rgb(224, 108, 109);
  background: linear-gradient(
    45deg,
    rgb(0, 255, 183),
    rgb(247, 147, 26),
    rgb(0, 255, 183),
    rgb(0, 255, 183),
    rgb(247, 147, 26)
  );
  background-size: 400% 400%;
`;
