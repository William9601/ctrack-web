import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/globalStyles";
import { PrimaryButton } from "./components/Button.styles";
import { AppContainer } from "./App.styles";
import { Card } from "./components/card/Card";
import Typography from "./components/typography/Typography.styles";
import theme from "./assets/styles/theme";
import { CtrackLogo } from "./assets/icons";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <CtrackLogo />
        <Card
          variant='default'
          height='12rem'
          width='20rem'
          backgroundColor='secondaryColor'
          padding='spacingMedium'>
          <div>
            <PrimaryButton>Here</PrimaryButton>
            <Typography variant='h1' color='errorColor'>
              Hello
            </Typography>
          </div>
        </Card>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
