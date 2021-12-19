import React from 'react';
import styled from 'styled-components'
import { Dify } from './cards/dify';
import { Gxc } from './cards/gxc';


export const Work = () =>  {  
  return (
        <Main>  
            <Gxc/>
            <Dify />
        </Main>        
  );
}


const Main = styled.div`
  display: flex;  
  flex-direction:column;
  align-items:center;
  text-align: center;
  padding: 10px 30px;
  gap:20px;
  padding-bottom: 50px;
`


