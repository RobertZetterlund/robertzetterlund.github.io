import React, { forwardRef } from "react";

import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { pliancyCss } from "../shared/pliancy.styled";

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  onScrollNext?: () => void;
};

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, onScrollNext, ...props }, ref) => (
    <SectionContainer ref={ref} {...props}>
      {children}
      {onScrollNext && <NextSection onClick={onScrollNext} />}
    </SectionContainer>
  )
);

const NextSection = ({ onClick }: { onClick: () => void }) => (
  <NextAnchor onClick={onClick}>
    <FaChevronDown />
  </NextAnchor>
);

const NextAnchor = styled.i`
  bottom: 0;
  padding: 20px;
  ${pliancyCss}
  position:absolute;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  min-height: 100vh;
  @media (max-width: 576px) {
    min-height: -webkit-fill-available;
  }
`;
