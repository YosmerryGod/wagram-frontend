// [ADDED] Load the existing WAGRAM scripts in their original execution order.
// The original DOM, CSS, and feature logic remain unchanged to preserve the UI.
import "../app.js";
import "../ai-chat-enhancements.js";
import "../connection.js";

// [ADDED] Register the PWA service worker only in secure browser contexts.
if ("serviceWorker" in navigator && window.isSecureContext) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("WAGRAM service worker registration failed:", error);
    });
  });
}
