import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "../src/styles/globals.css";
import PrivateRoutes from "./core/utils/PrivateRoutes";
import ScrollToTop from "./core/utils/ScrollToTop";
import HomePage from "./pages/home";
import LoginPage from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="erro" element={<a>Erro Page</a>} />

          <Route element={<PrivateRoutes />}>
            <Route path="home" element={<HomePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/erro" replace />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
