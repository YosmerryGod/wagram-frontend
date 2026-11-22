import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/",
    define: {
      __WAGRAM_API_BASE__: JSON.stringify(env.MINIAPP_API_BASE || "")
    },
    server: {
      host: "0.0.0.0"
    },
    preview: {
      host: "0.0.0.0"
    },
    build: {
      outDir: "dist",
      emptyOutDir: true
    }
  };
});
