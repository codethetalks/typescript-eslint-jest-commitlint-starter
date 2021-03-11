module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    // "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "plugins": [
    "@typescript-eslint",
    "eslint-comments",
    "functional",
    "import",
    "prettier",
  ],
  "parserOptions": {
    "ecmaVersion": 2018,  // Allows for the parsing of modern ECMAScript features
    "sourceType": 'module',  // Allows for the use of imports
  },
  "rules": {
    "prettier/prettier": ["error"],
    "no-console": ["off"],
    "no-useless-constructor": ["off"],
    "@typescript-eslint/no-useless-constructor": ["error"],
    "no-unused-vars": ["off"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-empty-function": ["off"],
    "@typescript-eslint/no-empty-function": ["error"],
    "no-else-return": ["off"]
  }
}