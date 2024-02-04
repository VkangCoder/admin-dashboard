import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "admin-dashboard",
    build: {
        outDir: "build", // Ensure this line is correctly specifying the output directory
    },
});
