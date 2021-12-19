import { css } from "styled-components";

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
