module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)?'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  docs: {
    autodocs: true
  }
};
