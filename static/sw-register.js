if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/static/sw.js");
  });
}

workbox.routing.registerRoute(
  new RegExp("*"),
  workbox.strategies.networkFirst()
);
