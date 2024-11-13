import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/globalStyles";
import { PrimaryButton } from "./components/Button.styles";
import { themeConstants } from "./assets/styles/themeConstants";
import { AppContainer } from "./App.styles";
import { Card } from "./components/card/Card";
import Typography from "./components/typography/Typography.styles";

function App() {
  return (
    <ThemeProvider theme={themeConstants}>
      <GlobalStyles />
      <AppContainer>
        <Card variant='default' height='12rem' width='20rem'>
          <div>
            <PrimaryButton>Here</PrimaryButton>
            <Typography variant='h1' color='successColor'>
              Hello
            </Typography>
          </div>
        </Card>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
