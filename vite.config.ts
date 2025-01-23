import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// declare module "@remix-run/cloudflare" {
//   interface Future {
//     v3_singleFetch: true;
//   }
// }

export default defineConfig({
  plugins: [
    cloudflare({ persistState: false }),
    reactRouter(),
    tsconfigPaths(),
  ],
  ssr: {
    resolve: {
      conditions: ["workerd", "worker", "browser"],
    },
  },
  resolve: {
    mainFields: ["browser", "module", "main"],
  },
  build: {
    minify: true,
    outDir: './build',
  },
});
