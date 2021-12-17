import React from 'react';

import styled, {keyframes} from 'styled-components'

function App() {
  return (
    <Main >
     <Name>
       Robert Zetterlund
     </Name>


    


    </Main>
  );
}

export default App;

const blink = keyframes`
  to {
    opacity:0;
  }

`


const Name = styled.h3`
  position:relative;
  &::after {
    content:'';
    position:absolute;
    top:0;
    right:-4px;
    bottom:0;
    width:2px;
    height:100%;
    background-color: black;
    opacity:1;
    animation: ${blink} 1s linear infinite;
  }

`


const Main = styled.main`
  display:grid;
  place-items:center;
`

