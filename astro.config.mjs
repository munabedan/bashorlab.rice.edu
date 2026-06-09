// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Set your custom GitHub Pages domain or github.io URL
  site: 'https://munabedan.github.io',

  // 2. Set the exact repository/subfolder name (must start and end with a slash)
  base: '/bashorlab.rice.edu/',
  
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "Press_Start_2P",
    cssVariable: "--press-start-2p",
    options: {
      variants: [{
        src: ['./src/fonts/PressStart2P-vaV7.ttf'],

      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "OrangeKid",
    cssVariable: "--orange-kid",
    options: {
      variants: [{
        src: ['./src/fonts/orange-kid.ttf'],

      }]
    }
  },
  ]
});