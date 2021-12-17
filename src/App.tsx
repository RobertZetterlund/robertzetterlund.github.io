import React, { useState } from 'react';

import styled, {keyframes, ThemeProvider} from 'styled-components'
import { lightTheme, darkTheme } from './theme/theme';
import { ToggleTheme } from './ToggleTheme';
import { Footer } from './Footer';

function App() {  
  const [theme,setTheme] = useState<'light'|'dark'>('dark')

  return (
    <ThemeProvider theme={theme==='light' ? lightTheme : darkTheme}>
      <Wrapper>
        <Header>
         <ToggleTheme toggleTheme={() => setTheme((old) => old==='light' ? 'dark':'light')} theme={theme}/>
        </Header>

        <Main>
          <Name>
            Robert Zetterlund
          </Name>
        </Main>

        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}



const Header = styled.header`
  padding:20px;
  display:flex;
  justify-content:flex-end;
  align-items:center;
`

export default App;

const blink = keyframes`
  to {
    opacity:0;
  }
`

const Name = styled.h3`
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
    animation: ${blink} 1s linear infinite;
  }

`


const Wrapper = styled.div`
  transition: background-color 0.5s ease;
  background-color: ${({theme})=> theme.background};
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

const Main = styled.main`
  display:grid;
  place-items:center;
`

