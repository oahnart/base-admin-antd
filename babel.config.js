module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'styled-components',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    [
      "babel-plugin-root-import",
      {
        "rootPathPrefix": "@",
        "rootPathSuffix": "src"
      }
    ]
  ],
  retainLines: true,
  env: {
    production: {
      only: ['app'],
      plugins: [
        'lodash',
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
        [
          "babel-plugin-root-import",
          {
            "rootPathPrefix": "@",
            "rootPathSuffix": "src"
          }
        ]
      ],
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  },
  include: [
    "src/**/*",
    "src/*"
  ]
};
