import React from "react";
import styled from "styled-components";
import { Chalmers } from "./cards/chalmers";
import { Dify } from "./cards/dify";
import { Gxc } from "./cards/gxc";
import { Sommarprat } from "./cards/Sommarprat";
import { Talos } from "./cards/talos";
import { IcaPrices } from "./cards/ica-prices";

export const Work = () => {
  return (
    <Main>
      <IcaPrices />
      <Sommarprat />
      <Talos />
      <Gxc />
      <Dify />
      <Chalmers />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  align-items: stretch;
  text-align: center;
  padding: 10px 30px;
  gap: 48px;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
`;
