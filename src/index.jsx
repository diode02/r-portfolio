import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
createRoot(document.getElementById("root")).render(<App />);
// Retire workers installed by previous builds so visitors receive the new assets.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => {
      for (const registration of registrations) {
        if (registration.scope === new URL("/", location.origin).href)
          registration.unregister();
      }
    })
    .catch(console.error);
}
