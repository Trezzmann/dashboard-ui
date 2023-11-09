import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "@fontsource-variable/dm-sans";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.tsx";
// import { DayPickerProvider } from "react-day-picker";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <DayPickerProvider > */}
        <App />
        {/* </DayPickerProvider> */}
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
