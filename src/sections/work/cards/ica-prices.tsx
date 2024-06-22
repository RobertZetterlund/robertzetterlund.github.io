import React from "react";
import styled from "styled-components";
import { Body, Card, ImageContainerCss, Picture, Text } from "./card.styled";
import icaPrices from "./ica-priset.svg";

export const IcaPrices = () => {
  return (
    <Card>
      <ImageContainer>
        <Picture
          src={icaPrices}
          style={{ borderRadius: 24 }}
          alt="Logotype of the grocery store ICA followed by a the text '-prices?'"
        />
      </ImageContainer>
      <Text>
        <Body>
          {"Created wordle-esque: "}
          <a
            href="https://ica-prices.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            https://ica-prices.vercel.app/
          </a>
        </Body>
        <ul>
          <li>
            <a href="https://preactjs.com/">Preact.js ⚛️</a>
          </li>
        </ul>
      </Text>
    </Card>
  );
};

const ImageContainer = styled.div`
  ${ImageContainerCss};
  background: #e13205;
  background: linear-gradient(
    45deg,
    #6a1b1b,
    #e13205,
    #6a1b1b,
    #6a1b1b,
    #e13205
  );
  background-size: 400% 400%;
`;
