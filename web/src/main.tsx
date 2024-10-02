import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Redirect } from "./pages/Redirect.tsx";
import { ClickJacking } from "./pages/ClickJacking.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/click-jacking" element={<ClickJacking />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
