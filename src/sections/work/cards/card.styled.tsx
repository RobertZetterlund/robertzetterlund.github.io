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
  font-size: 14px;
  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const Picture = styled.img`
  height: 120px;
  width: auto;
  border-radius: 20%;
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
  border-radius: 20px 20px 105px 0px;
  display: grid;
  place-items: center;
  animation: ${gradient} 15s linear infinite;
`;

const CardCss = css`
  max-width: 300px;
  width: 100%;
  background-color: ${({ theme }) => theme.card.bg};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 22px;
`;

export const Card = styled.div`
  ${CardCss};
`;

export const Text = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  padding: 14px;
  @media (min-width: 576px) {
    padding: 20px;
  }

  ul {
    padding-inline-start: 24px;
    li {
      text-align: left;
      color: ${({ theme }) => theme.card.text};
    }
  }
`;

export const Body = styled.p`
  color: ${({ theme }) => theme.card.text};
  font-weight: 600;

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.gxc};

    &:hover {
      color: ${({ theme }) => theme.gxc};
    }
  }
`;
