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
import gxcImg from "./gxc.png";

export const Gxc = () => {
  return (
    <Card>
      <ImageContainer>
        <Company>
          @
          <a href="https://www.opera.com/" rel="noreferrer" target="_blank">
            Opera
          </a>
        </Company>
        <Picture src={gxcImg} alt="A picture of me" />
      </ImageContainer>
      <Text>
        <Body>
          {"React development on "}
          <a href="https://gxc.gg/" rel="noreferrer" target="_blank">
            gxc.gg
          </a>
        </Body>
        <ul>
          <li>next.js and CRA 🏄‍♂️</li>
          <li>react-query 🔄</li>
          <li>styled-components 💅</li>
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
    rgba(224, 108, 109, 1),
    rgba(0, 100, 208, 1),
    rgba(224, 108, 109, 1),
    rgba(224, 108, 109, 1),
    rgba(0, 100, 208, 1)
  );
  background-size: 400% 400%;
`;
