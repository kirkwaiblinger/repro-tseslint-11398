import tseslint from "typescript-eslint";

const config: ReturnType<typeof tseslint.config> = tseslint.config(
  //#region typescript-eslint
  ...tseslint.configs.strictTypeChecked,
  {
    name: "typescript-eslint overrides",
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  //#endregion
);

export default config;
