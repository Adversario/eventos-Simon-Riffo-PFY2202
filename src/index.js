import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apollo/client";
import App from "./App";
import "./index.css";

async function enableMockingWithTimeout(timeoutMs = 1500) {
  // Intentamos arrancar MSW, pero no dejamos que bloquee el render.
  try {
    const { worker } = await import("./mocks/browser");

    const startPromise = worker.start({
      serviceWorker: {
        url: `${process.env.PUBLIC_URL}/mockServiceWorker.js`
      }
    });

    const timeoutPromise = new Promise((resolve) =>
      setTimeout(() => resolve("timeout"), timeoutMs)
    );

    const result = await Promise.race([startPromise, timeoutPromise]);

    if (result === "timeout") {
      console.warn(
        `[MSW] start() tardó más de ${timeoutMs}ms. Se renderiza igual en modo fallback.`
      );
    }

    return true;
  } catch (error) {
    console.warn("[MSW] No se pudo iniciar MSW. Se renderiza igual.", error);
    return true;
  }
}

enableMockingWithTimeout().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>
  );
});