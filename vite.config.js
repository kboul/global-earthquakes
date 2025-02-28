import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    // opens the broswer when the server starts
    server: {
      open: true
    },
    plugins: [react()]
  };
});
