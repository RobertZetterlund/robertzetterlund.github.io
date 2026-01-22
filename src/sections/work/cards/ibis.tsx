import React from "react";
import styled from "styled-components";
import { Body, Card, ImageContainerCss, Picture, Text } from "./card.styled";
import ibisImg from "./ibis.png";

export const Ibis = () => {
  return (
    <Card>
      <ImageContainer>
        <Picture src={ibisImg} style={{ borderRadius: 24 }} alt="Ibis+" />
      </ImageContainer>
      <Text>
        <Body>
          {"Created chrome extension: "}
          <a
            href="https://chromewebstore.google.com/detail/ibis+/gnafengimackgbckodokckgiinofafgh"
            rel="noreferrer"
            target="_blank"
          >
            ibis+
          </a>
          {" to improve floorball statistic website"}
        </Body>
        <ul>
          <li>
            <a href="https://reactjs.org/">React 🌀</a>
          </li>
          <li>js dom manip 😎</li>
        </ul>
      </Text>
    </Card>
  );
};

const ImageContainer = styled.div`
  ${ImageContainerCss};
  background: #0b2b83;
  background: linear-gradient(
    45deg,
    #be8003,
    #be3102,
    #be8003,
    #be8003,
    #be3102
  );
  background-size: 400% 400%;
`;
