module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env', '@babel/typescript'],
  plugins: [
    ['macros'],
    ['babel-plugin-styled-components', { pure: true }],
    ['react-hot-loader/babel'],
    ['effector/babel-plugin'],
  ],
};
