import React from "react";

import styled, { css } from "styled-components";

import { FaGithub, FaLinkedin, FaRegPaperPlane } from "react-icons/fa";

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

export const pliancyCss = css`
  transition: transform 250ms ease, opacity 250ms ease;

  &:focus,
  &:hover {
    transform: scale(1.2);
    opacity: 0.7;
  }
  svg {
    transition: fill 250ms ease;
    fill: ${({ theme }) => theme.accent};
    height: 24px;
    width: 24px;
    opacity: 1;
  }
`;

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
