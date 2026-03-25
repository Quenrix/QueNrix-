import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Force light theme
localStorage.setItem("theme", "light");
document.documentElement.classList.remove("dark");
document.documentElement.classList.add("scroll-smooth", "light");

createRoot(document.getElementById("root")).render(<App />);

