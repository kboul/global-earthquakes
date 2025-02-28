import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // opens the broswer when the server starts
    host: "0.0.0.0", // Allows access from outside the container
    port: 5173 // Explicitly set the port
  }
});
