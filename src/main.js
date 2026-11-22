// [MODIFIED] Set the backend URL before loading legacy scripts.
window.MINIAPP_API_BASE =
  __WAGRAM_API_BASE__ || window.MINIAPP_API_BASE || "/api/miniapp";

// [MODIFIED] Load existing feature scripts sequentially to preserve their order.
await import("../app.js");
await import("../ai-chat-enhancements.js");
await import("../connection.js");

// [ADDED] Register the PWA service worker only in secure browser contexts.
if ("serviceWorker" in navigator && window.isSecureContext) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("WAGRAM service worker registration failed:", error);
    });
  });
}
