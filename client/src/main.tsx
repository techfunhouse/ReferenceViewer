import * as React from "react"
import { createRoot } from "react-dom/client";
import App from "./App";
// Make sure CSS is imported
import "./index.css";

// Set default environment variables for client if not set
if (!import.meta.env.VITE_API_URL) {
  // @ts-ignore
  import.meta.env.VITE_API_URL = 'http://localhost:5000';
}
if (!import.meta.env.VITE_GITHUB_PAGES) {
  // @ts-ignore
  import.meta.env.VITE_GITHUB_PAGES = 'false';
}
if (!import.meta.env.VITE_BASE_PATH) {
  // @ts-ignore
  import.meta.env.VITE_BASE_PATH = '/';
}
if (!import.meta.env.VITE_USE_CUSTOM_DOMAIN) {
  // @ts-ignore
  import.meta.env.VITE_USE_CUSTOM_DOMAIN = 'false';
}

// Check if we're on a custom domain
const isCustomDomain = () => {
  const hostname = window.location.hostname;
  return !hostname.includes('github.io') && 
         !hostname.includes('replit.app') && 
         hostname !== 'localhost' &&
         !hostname.includes('127.0.0.1');
};

// Help debug GitHub Pages deployment
console.log('AI Learning Resources App Starting:');
console.log('- Environment mode:', import.meta.env.MODE);
console.log('- GitHub Pages mode:', import.meta.env.VITE_GITHUB_PAGES ? 'Yes' : 'No');
console.log('- Custom domain:', isCustomDomain() ? 'Yes' : 'No');
console.log('- Custom domain flag:', import.meta.env.VITE_USE_CUSTOM_DOMAIN || 'Not set');
console.log('- Domain:', window.location.hostname);
console.log('- Base path:', import.meta.env.VITE_BASE_PATH || 'Default (/)');

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(<App />);
