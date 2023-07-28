import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import ErrorBoundary from "./components/error-boundary/error-boundary";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback = "error">
        <App />
    </ErrorBoundary>
  </React.StrictMode>
);

