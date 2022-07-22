import React from "react";
import styled from "styled-components";
import { Chalmers } from "./cards/chalmers";
import { Dify } from "./cards/dify";
import { Gxc } from "./cards/gxc";
import { Talos } from "./cards/talos";

export const Work = () => {
  return (
    <Main>
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
