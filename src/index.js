import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const rootElement = document.getElementById("root");

// Use createRoot to render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
