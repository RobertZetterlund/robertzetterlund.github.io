import React from "react";

import styled from "styled-components";

import { FaGithub, FaLinkedin, FaRegPaperPlane } from "react-icons/fa";
import { pliancyCss } from "../shared/pliancy.styled";

export const Footer = () => (
  <FooterContainer>
    <FooterLink
      href="https://github.com/RobertZetterlund"
      target="blank"
      rel="noreferrer"
    >
      <FaGithub />
    </FooterLink>
    <FooterLink href="mailto:robert.zetterlund@outlook.com">
      <FaRegPaperPlane />
    </FooterLink>
    <FooterLink
      href="https://www.linkedin.com/in/robert-zetterlund-a3bb6717a/"
      target="blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </FooterLink>
  </FooterContainer>
);

const FooterLink = styled.a`
  ${pliancyCss};
`;

const FooterContainer = styled.footer`
  padding: 10px 0;
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;
