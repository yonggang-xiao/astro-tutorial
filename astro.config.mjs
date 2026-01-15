// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  base: process.env.ASTRO_BASE_PATH
    ? process.env.ASTRO_BASE_PATH.replace(/\/$/, '')
    : '',
  integrations: [preact()]
});