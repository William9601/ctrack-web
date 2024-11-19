import { StyleSheetManager, ThemeProvider, WebTarget } from "styled-components";
import GlobalStyles from "./assets/styles/globalStyles";
import { AppContainer, LogoContainer } from "./App.styles";
import Typography from "./components/typography/Typography.styles";
import theme from "./assets/styles/theme";
import { CtrackLogo } from "./assets/icons";
import { Dashboard } from "./pages/dashboard/Dashboard";
import isPropValid from "@emotion/is-prop-valid";

function shouldForwardProp(propName: string, target: WebTarget) {
  if (typeof target === "string") {
    return isPropValid(propName);
  }

  return true;
}

function App() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppContainer>
          <LogoContainer>
            <CtrackLogo />
            <Typography variant='logo' color='onPrimaryColor'>
              c-track.one
            </Typography>
          </LogoContainer>
          <Dashboard />
        </AppContainer>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
