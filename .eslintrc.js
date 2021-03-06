module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 13,
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      'prettier/prettier': 0,
      '@typescript-eslint/no-explicit-any': 0,
      'react/jsx-key': 0,
      '@typescript-eslint/no-unused-vars': 0,
      'react/react-in-jsx-scope': 0,
    },
  };
  