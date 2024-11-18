import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/globalStyles";
import {
  AppContainer,
  GridContainer,
  GridItemOne,
  GridItemThree,
  GridItemTwo,
  LogoContainer,
} from "./App.styles";
import { Card } from "./components/card/Card";
import Typography from "./components/typography/Typography.styles";
import theme from "./assets/styles/theme";
import { CtrackLogo } from "./assets/icons";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <LogoContainer>
          <CtrackLogo />
          <Typography variant='logo' color='onPrimaryColor'>
            c-track.one
          </Typography>
        </LogoContainer>

        <GridContainer>
          <GridItemOne>
            <Card
              variant='default'
              backgroundColor='secondaryColor'
              padding='spacingMedium'>
              <div>
                <Typography variant='h1' color='errorColor'>
                  One
                </Typography>
              </div>
            </Card>
          </GridItemOne>
          <GridItemTwo>
            <Card
              variant='default'
              backgroundColor='secondaryColor'
              padding='spacingMedium'>
              <div>
                <Typography variant='h1' color='errorColor'>
                  Two
                </Typography>
              </div>
            </Card>
          </GridItemTwo>
          <GridItemThree>
            <Card
              variant='default'
              backgroundColor='secondaryColor'
              padding='spacingMedium'>
              <div>
                <Typography variant='h1' color='errorColor'>
                  Three
                </Typography>
              </div>
            </Card>
          </GridItemThree>
        </GridContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
