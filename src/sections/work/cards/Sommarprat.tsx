import React from "react";
import styled from "styled-components";
import { Body, Card, ImageContainerCss, Picture, Text } from "./card.styled";
import sommarpratUI from "./sommarprat-ui.svg";

export const Sommarprat = () => {
  return (
    <Card>
      <ImageContainer>
        <Picture
          src={sommarpratUI}
          style={{ borderRadius: 24 }}
          alt="A sun that looks like a record player hidden in part by a gray cloud"
        />
      </ImageContainer>
      <Text>
        <Body>
          {"Created "}
          <a
            href="https://sommarprat-ui.fly.dev/"
            rel="noreferrer"
            target="_blank"
          >
            sommarprat-ui.fly.dev/
          </a>
        </Body>
        <ul>
          <li>remix.run 💿</li>
          <li>prisma 🔼</li>
          <li>tailwind.css 🧬</li>
          <li>fly.io 🪂</li>
        </ul>
      </Text>
    </Card>
  );
};

const ImageContainer = styled.div`
  ${ImageContainerCss};
  background: #ffeb83;
  background: linear-gradient(
    45deg,
    #1b3e6a,
    #ffeb83,
    #1b3e6a,
    #1b3e6a,
    #ffeb83
  );
  background-size: 400% 400%;
`;
