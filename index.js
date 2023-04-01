// let demoPackage = require("@pinninti-sravanthi/demo");

// demoPackage.sayHello("World");

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.js";

const container = document.getElementById("ele");
const root = createRoot(container);

root.render(<App />);
