import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [svgr(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
