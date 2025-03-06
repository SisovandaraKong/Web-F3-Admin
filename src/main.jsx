import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import RootLayout from "./components/layouts/RootLayout.jsx";
import App from "./App.jsx";
import FreelancerPage from "./pages/FreelancerPage.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Job from "./pages/Job";
import AboutUs from "./pages/About us";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<FreelancerPage/>} />
          <Route path="/job" element={<Job/>}/>
          <Route path="/about-us/job" element={<AboutUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
