module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/typescript',
    '@lingui/babel-preset-react',
  ],
  plugins: [
    ['babel-plugin-styled-components', { pure: true }],
    ['react-hot-loader/babel'],
    ['effector/babel-plugin'],
  ],
};
