import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/globalStyles";
import { PrimaryButton } from "./components/Button.styles";
import { AppContainer } from "./App.styles";
import { Card } from "./components/card/Card";
import Typography from "./components/typography/Typography.styles";
import theme from "./assets/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Card variant='default' height='12rem' width='20rem'>
          <div>
            <PrimaryButton>Here</PrimaryButton>
            <Typography variant='h1'>hello</Typography>
          </div>
        </Card>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
