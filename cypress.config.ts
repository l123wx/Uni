import { defineConfig } from 'cypress'

export default defineConfig({
  scrollBehavior: false,
  e2e: {
    specPattern: '**/__test__/**/*.{js,jsx,ts,tsx}',
    experimentalRunAllSpecs: true,
  },
})
