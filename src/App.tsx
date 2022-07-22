import React, { useRef, useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { ToggleTheme } from "./theme/ToggleTheme";
import { Footer } from "./sections/Footer";
import { Welcome } from "./sections/welcome/Welcome";
import { Section } from "./sections/Section";
import { Work } from "./sections/work/Work";
import { backgroundTransitionCss } from "./shared/transition.styled";

import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const workRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Helmet>
        <meta
          name="theme-color"
          content={
            theme === "light" ? lightTheme.background : darkTheme.background
          }
        />
      </Helmet>

      <GlobalStyle />
      <Header>
        <ToggleTheme setTheme={setTheme} theme={theme} />
      </Header>
      <Wrapper>
        <Section onScrollNext={() => workRef.current?.scrollIntoView()}>
          <Welcome />
        </Section>
        <Section ref={workRef}>
          <Work />
          <Footer />
        </Section>
      </Wrapper>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    // needed for tab switches in iPhone
    background-color: ${({ theme }) => theme.background};
  }
`;

const Header = styled.header`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 1;
`;

const Wrapper = styled.div`
  ${backgroundTransitionCss};
  background-color: ${({ theme }) => theme.background};
  position: relative;
`;

export default App;
