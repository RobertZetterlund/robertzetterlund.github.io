import React from "react";
import styled from "styled-components";
import { Body, Card, ImageContainerCss, Picture, Text } from "./card.styled";
import pojengImg from "./pojeng.svg";

export const Pojeng = () => {
  return (
    <Card>
      <ImageContainer>
        <Picture
          src={pojengImg}
          style={{ borderRadius: 24 }}
          alt="Pojeng logo"
        />
      </ImageContainer>
      <Text>
        <Body>
          {"Created "}
          <a href="https://pojeng.app/" rel="noreferrer" target="_blank">
            pojeng.app
          </a>
        </Body>
        <ul>
          <li>
            <a href="https://reactjs.org/">React 🌀</a>
          </li>
          <li>
            <a href="https://www.prisma.io/">Prisma 🔼</a>
          </li>
          <li>
            <a href="https://supabase.com/">Supabase ⚡</a>
          </li>
          <li>
            <a href="https://resend.com/">Resend 📧</a>
          </li>
        </ul>
      </Text>
    </Card>
  );
};

const ImageContainer = styled.div`
  ${ImageContainerCss};
  background: #0b8f4a;
  background: linear-gradient(
    45deg,
    #21c46b,
    #0b8f4a,
    #21c46b,
    #21c46b,
    #0b8f4a
  );
  background-size: 400% 400%;
`;
