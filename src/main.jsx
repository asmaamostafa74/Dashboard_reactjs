import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import './index.css'
import Dashboard from "./pages/dashboard";
import Tables from "./pages/Tables";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/billing" element={<div>Billing</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
