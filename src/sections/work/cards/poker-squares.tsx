import React from "react";
import styled from "styled-components";
import { Body, Card, ImageContainerCss, Picture, Text } from "./card.styled";
import pokerSquares from "./poker-squares.svg";

export const PokerSquares = () => {
  return (
    <Card>
      <ImageContainer>
        <Picture
          src={pokerSquares}
          style={{ borderRadius: 24 }}
          alt="An outline of a spade typically on a poker hand"
        />
      </ImageContainer>
      <Text>
        <Body>
          {"Created wordle-esque: "}
          <a
            href="https://poker-squares.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            https://poker-squares.vercel.app/
          </a>
        </Body>
        <ul>
          <li>
            <a href="https://nextjs.org/">Next.js 🔼</a>
          </li>
          <li>
            <a href="https://redis.io/">Redis 💾</a>
          </li>
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
    #0b2b83,
    #0b34a0,
    #0b2b83,
    #0b2b83,
    #0b34a0
  );
  background-size: 400% 400%;
`;
