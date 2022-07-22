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
      aria-label="Github"
    >
      <FaGithub />
    </FooterLink>
    <FooterLink
      href="mailto:robert.zetterlund@outlook.com"
      aria-label="Paperplane"
    >
      <FaRegPaperPlane />
    </FooterLink>
    <FooterLink
      href="https://www.linkedin.com/in/robert-zetterlund-a3bb6717a/"
      target="blank"
      rel="noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </FooterLink>
  </FooterContainer>
);

const FooterLink = styled.a`
  ${pliancyCss};
`;

const FooterContainer = styled.footer`
  padding-top: 24px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: center;
`;
