import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/globalStyles";
import { PrimaryButton } from "./components/Button.styles";
import { themeConstants } from "./assets/styles/themeConstants";
import { AppContainer } from "./App.styles";
import { Card } from "./components/card/Card";

function App() {
  return (
    <ThemeProvider theme={themeConstants}>
      <GlobalStyles />
      <AppContainer>
        <Card variant='default' height='12rem' width='20rem'>
          <PrimaryButton>Here</PrimaryButton>
        </Card>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
