import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { webcrypto } from 'crypto';
globalThis.crypto = webcrypto;

export default defineConfig({
  plugins: [
    nodePolyfills({
      globals: {
        crypto: true
      }
    })
  ]
});