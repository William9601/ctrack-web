import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/globalStyles";
import { AppContainer, LogoContainer } from "./App.styles";
import Typography from "./components/typography/Typography.styles";
import theme from "./assets/styles/theme";
import { CtrackLogo } from "./assets/icons";
import { Dashboard } from "./pages/dashboard/Dashboard";

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
        <Dashboard />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
