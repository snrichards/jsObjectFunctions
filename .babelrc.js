const plugins = [
  '@babel/plugin-proposal-optional-chaining',
];

if (process.env.NODE_ENV === 'test') {
  plugins.push('transform-es2015-modules-commonjs');
}

module.exports = {
  plugins,
  presets: [
    [
      '@babel/stage-2',
      {
        decoratorsLegacy: true,
      },
    ],
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          browsers: 'ie >= 11',
        },
      },
    ],
  ],
};
