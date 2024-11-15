import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/globalStyles";
import { PrimaryButton } from "./components/Button.styles";
import { AppContainer } from "./App.styles";
import { Card } from "./components/card/Card";
import Typography from "./components/typography/Typography.styles";
import theme from "./assets/styles/theme";
import { CtrackLogo } from "./assets/icons";
import styles from "./App.module.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <div className={styles.logoContainer}>
          <CtrackLogo className={styles.logo} />
          <h1 className={styles.logoString}>c-track.one</h1>
        </div>
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
