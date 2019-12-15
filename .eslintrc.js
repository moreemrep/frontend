const requireText = require('require-text')
const schemaString = requireText('./graphql/schema.graphql', require)

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "prettier", "graphql"],
  env: {
    browser: true,
    jasmine: true,
    jest: true
  },
  rules: {
    "prettier/prettier": ["error", { 
      singleQuote: true,
      semi: true,
      printWidth: 120
      
    }],
    "graphql/template-strings": ["error", {
      env: "relay",
      schemaString,
      tagName: "graphql"
    }],
    "@typescript-eslint/explicit-function-return-type": "warn",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
    
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  parser: "@typescript-eslint/parser"
}