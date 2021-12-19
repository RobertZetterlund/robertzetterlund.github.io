import React, { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { ToggleTheme } from "./ToggleTheme";
import { Footer } from "./Footer";
import { AboutMe } from "./AboutMe";
import { Section } from "./Section";
import { Work } from "./work/Work";
import { backgroundTransitionCss } from "./transition.styled";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Header>
        <ToggleTheme
          toggleTheme={() =>
            setTheme((old) => (old === "light" ? "dark" : "light"))
          }
          theme={theme}
        />
      </Header>
      <Wrapper>
        <Section id="welcome" nextId="work">
          <AboutMe />
        </Section>
        <Section id="work">
          <Work />
          <Footer />
        </Section>
      </Wrapper>
    </ThemeProvider>
  );
}

const Header = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 20px;
`;

const Wrapper = styled.div`
  ${backgroundTransitionCss};
  background-color: ${({ theme }) => theme.background};
  overflow-y: scroll;
  position: relative;
  scroll-behavior: smooth;
`;

export default App;
