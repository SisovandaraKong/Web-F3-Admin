import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FreelancerPage from "./pages/FreelancerPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FreelancerPage />
      <h1 className="text-MainTitle underline text-accent">Hello world</h1>
    </>
  );
}

export default App;
