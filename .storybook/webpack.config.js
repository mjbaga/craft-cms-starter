const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.twig$/,
    use: {
      loader: 'twigjs-loader',
      options: {
        allowInlineIncludes: true,
      },
    },
  });

  // Tell Storybook where your components live
  config.resolve.alias['templates'] = path.resolve(__dirname, '..', 'templates');
  config.resolve.alias['_components'] = path.resolve(__dirname, '..', 'templates', '_components');
  config.resolve.alias['_macros'] = path.resolve(__dirname, '..', 'templates', '_macros');

  return config;
};
