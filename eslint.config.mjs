// eslint.config.mjs

import cypressPlugin from "eslint-plugin-cypress"; // Import the Cypress plugin

export default [
  {
    files: ["**/*.js"], // Apply rules to all JavaScript files
    languageOptions: {
      ecmaVersion: "latest", // Set the ECMAScript version to the latest
      sourceType: "module", // Use ECMAScript modules
      globals: {
        browser: true, // Enable browser global variables
        es2021: true, // Enable ES2021 global variables
        node: true, // Enable Node.js global variables
      },
    },
    rules: {
      // Place any global ESLint rules here
    },
    plugins: [],
    linterOptions: {
      reportUnusedDisableDirectives: true, // Extra option to report unused eslint-disable directives
    },
  },
  {
    // Cypress-specific configuration
    files: ["**/*.cy.js"],
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      globals: cypressPlugin.configs.recommended.env,
    },
    rules: {
      "cypress/no-unnecessary-waiting": "off", // Disable unnecessary waiting rule
      "no-unused-vars": "off", // Disable unused variables rule
    },
    settings: {
      // Place any Cypress-specific settings if needed
    },
  },
];
