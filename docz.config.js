module.exports = {
  title: 'React App',
  description: 'This is React App documentation',
  themeConfig: {
    mode: 'dark',
    colors: {
      primary: '#3a7ddd',
    },
  },
  ignore: ['LICENCE.md'],
  port: 7000,
  wrapper: 'src/app/providers.tsx',
  codeSandbox: false,
  typescript: true,
  menu: [
    {
      name: 'Intro',
      menu: ['Getting started', 'Configure WebStorm'],
    },
  ],
};
