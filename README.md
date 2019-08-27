# ReactJS Project Base

This is a ReactJS Project base with all the Webpack configurations made from the ground.

- [ReactJS Project Base](#reactjs-project-base)
  - [Recommended Extensions and configurations](#recommended-extensions-and-configurations)
    - [Extensions](#extensions)
    - [Configurations](#configurations)
  - [Running your ReactJS Project](#running-your-reactjs-project)

## Recommended Extensions and configurations

### Extensions

1. ESLint
2. EditorConfig for VS Code
3. Prettier - Code formatter
4. vscode-styled-components

### Configurations

To access this configurations, enter Preferences > Settings:

1. Editor: Format On Save > Disabled
2. Eslint: Auto Fix On Save > Enabled
3. Prettier: Eslint Integration > Enabled

## Running your ReactJS Project

Each time the project run in a development environment, the linter installed make a search for code without the correct rules applied. This behavior is done too when commiting code, avoiding commiting code with bad practices.

1. Linting before running

```bash
npm run lint
```

2. Running locally

```bash
npm run dev
```

3. Running for production

```bash
npm run build
```
