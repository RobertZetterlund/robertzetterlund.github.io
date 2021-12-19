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

import chalmersImg from "./chalmers.png";

export const Chalmers = () => {
  return (
    <Card>
      <ImageContainer>
        <Company>
          @
          <a
            href="https://www.chalmers.se/en/Pages/default.aspx"
            rel="noreferrer"
            target="_blank"
          >
            Chalmers
          </a>
        </Company>
        <Picture
          src={chalmersImg}
          alt="Chalmers University of Technology logo"
        />
      </ImageContainer>
      <Text>
        <Body>Bachelor's degree in Software engineering</Body>
        <ul>
          <li>Design principles 📦</li>
          <li>Algorithms 📚</li>
          <li>Math 🎓</li>
          <li>Agile workflow 🤾‍♂️</li>
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
    rgba(0, 67, 138, 0.8),
    rgba(94, 199, 193, 1),
    rgba(0, 67, 138, 0.8),
    rgba(0, 67, 138, 0.8),
    rgba(94, 199, 193, 1)
  );
  background-size: 400% 400%;
`;
