import isPropValid from "@emotion/is-prop-valid";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.ts";
import { GlobalStyle } from "./styles/GlobalStyles.ts";
import { theme } from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <App />
        </StyleSheetManager>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
