import styled, { keyframes, css } from "styled-components";

export const Company = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  color: ${({ theme }) => theme.card.text};
  background-color: ${({ theme }) => theme.card.bg};
`;

export const Picture = styled.img`
  height: 120px;
  width: auto;
  border-radius: 50%;
`;

const gradient = keyframes`
    0% {
        background-position: 100% 0%;
    }

    100% {
        background-position: 0% 100%;
    }
`;

export const ImageContainerCss = css`
  position: relative;
  height: 200px;
  width: 100%;
  border-radius: 0 0 40% 0;
  display: grid;
  place-items: center;
  animation: ${gradient} 15s linear infinite;
`;

const CardCss = css`
  max-width: 350px;
  width: 100%;
  background-color: ${({ theme }) => theme.card.bg};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5%;
  overflow: hidden;
`;

export const Card = styled.div`
  ${CardCss};
`;

export const Text = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  padding: 20px;
`;

export const LI = styled.li`
  text-align: left;
  color: ${({ theme }) => theme.card.text};
`;

export const Body = styled.p`
  color: ${({ theme }) => theme.card.text};
`;
