import React, { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { ToggleTheme } from "./theme/ToggleTheme";
import { Footer } from "./sections/Footer";
import { Welcome } from "./sections/welcome/Welcome";
import { Section } from "./sections/Section";
import { Work } from "./sections/work/Work";
import { backgroundTransitionCss } from "./shared/transition.styled";
import { Info } from "./sections/info/Info";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Header>
        <ToggleTheme setTheme={setTheme} theme={theme} />
      </Header>
      <Wrapper>
        <Section id="welcome" nextId="work">
          <Welcome />
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
  position: fixed;
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
