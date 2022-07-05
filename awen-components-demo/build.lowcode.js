const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: '@alilc',
        extraAssets: [
          'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.1/build/lowcode/assets-prod.json',
          'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.3/build/antd-lowcode/assets-prod.json',
        ],
      },
    ],
  ],
};
