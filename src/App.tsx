import React, { useState } from 'react';

import styled, { ThemeProvider} from 'styled-components'
import { lightTheme, darkTheme } from './theme/theme';
import { ToggleTheme } from './ToggleTheme';
import { Footer } from './Footer';
import { AboutMe } from './AboutMe';
import { Section } from './Section';


function App() {  
  const [theme, setTheme] = useState<'light'|'dark'>('dark')

  return (
    <ThemeProvider theme={theme==='light' ? lightTheme : darkTheme}>
      <Header>
          <ToggleTheme toggleTheme={() => setTheme((old) => old==='light' ? 'dark':'light')} theme={theme}/>
      </Header>
      <Wrapper>
        <Section id='welcome' nextId='work'>
          <AboutMe /> 
        </Section>
        <Section id='work' nextId='tech'/>
        <Section id='tech'>
          <Footer />
        </Section>
      </Wrapper>
    </ThemeProvider>
  );
}



const Header = styled.header`
  width:100%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  position:absolute;
  top:0;
  left:0;
  z-index:1;
`

const Wrapper = styled.div`
  transition: background-color 0.5s ease;
  background-color: ${({theme})=> theme.background};
  overflow-y:scroll;
  position:relative;
  scroll-behavior: smooth;
`

export default App;