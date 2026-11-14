import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { wedding } from "./src/wedding.config";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Link previews (WhatsApp, iMessage, social media) need a full web address for the image.
// Vercel provides the site address while building, so we use it when available.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "";

// Fills the {{placeholders}} in index.html with values from src/wedding.config.ts
const weddingHtml = (): Plugin => ({
  name: "wedding-html",
  transformIndexHtml(html) {
    const values: Record<string, string> = {
      title: wedding.share.title,
      description: wedding.share.description,
      author: `${wedding.couple.partner1} & ${wedding.couple.partner2}`,
      image: wedding.share.image.startsWith("http")
        ? wedding.share.image
        : `${siteUrl}${wedding.share.image}`,
    };
    return html.replace(/\{\{(\w+)\}\}/g, (match, key) =>
      key in values ? escapeHtml(values[key]) : match,
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), weddingHtml()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
