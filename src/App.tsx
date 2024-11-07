import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/globalStyles";
import { PrimaryButton } from "./components/Button.style";
import { themeConstants } from "./assets/styles/themeConstants";

function App() {
  return (
    <ThemeProvider theme={themeConstants}>
      <GlobalStyles />
      <PrimaryButton>Here</PrimaryButton>
    </ThemeProvider>
  );
}

export default App;
