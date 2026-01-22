import React from "react";
import styled from "styled-components";
import { Body, Card, ImageContainerCss, Picture, Text } from "./card.styled";

import riksdagenImg from "./riksdagen.png";

export const Riksdagle = () => {
  return (
    <Card>
      <ImageContainer>
        <Picture src={riksdagenImg} alt="Riksdagen logo" />
      </ImageContainer>
      <Text>
        <Body>
          {"Guess party-affiliation in riksdag: "}
          <a
            href="https://riksdagle.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            riksdagle.vercel.app
          </a>
        </Body>
        <ul>
          <li>
            <a href="https://nextjs.org/">Next.js 🔼</a>
          </li>

          <li>
            <a href="https://beautiful-soup-4.readthedocs.io/en/latest/">
              beatifulsoup 🍲
            </a>
          </li>
        </ul>
      </Text>
    </Card>
  );
};

const ImageContainer = styled.div`
  ${ImageContainerCss};

  background-color: rgb(0, 67, 138);
  background: rgb(0, 67, 138);
  background: linear-gradient(
    45deg,
    rgba(0, 122, 138, 0.8),
    rgba(94, 199, 193, 1),
    rgba(0, 122, 138, 0.8),
    rgba(0, 122, 138, 0.8),
    rgba(94, 199, 193, 1)
  );
  background-size: 400% 400%;
`;
