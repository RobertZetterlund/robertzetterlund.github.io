import React from 'react';
import styled, {keyframes} from 'styled-components'


export const AboutMe = () =>  {  

  return (
        <Main>
          <Name>
            Robert Zetterlund
          </Name>

          
          
          
        </Main>        
  );
}

const blink = keyframes`
  0% {
    opacity:0;
  }

  50% {
    opacity:1;
  }

  100% {
    opacity:1
  }
`

const Name = styled.h1`
  position:relative;
  transition: color 0.5s ease;
  color: ${({theme})=> theme.accent};
  &::after {
    content:'';
    position:absolute;
    top:0;
    right:-4px;
    bottom:0;
    width:2px;
    height:100%;
    transition: background-color 0.5s ease;
    background-color: ${({theme})=> theme.accent};
    opacity:1;
    animation: ${blink} 1.5s steps(1) infinite;
  }

`

const Main = styled.main`
  display:grid;
  place-items:center;
`

