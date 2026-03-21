export const siteConfig = {
  siteName: "Skye Suites Hotel Facility System Academic Proof-of-Concept",
  // Use Firebase preview URL in dev, or final hosting URL in prod
  siteUrl:
    import.meta.env.VITE_SITE_URL ||
    (import.meta.env.MODE === "development"
      ? "http://localhost:5173"
      : "https://your-project-id.web.app"),
};
