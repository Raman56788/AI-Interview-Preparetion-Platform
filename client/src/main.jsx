import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

// ✅ NEW IMPORT
import { CodingProvider } from "./context/CodingContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* ✅ Wrap App with CodingProvider */}
      <CodingProvider>
        <App />
      </CodingProvider>
    </BrowserRouter>
  </StrictMode>
);