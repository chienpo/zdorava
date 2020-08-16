const moduleResolver = {
  root: ['./src'],
};

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/typescript'],
  plugins: [
    ['babel-plugin-styled-components', { pure: true }],
    ['module-resolver', moduleResolver],
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
  ],
};
