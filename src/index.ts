import { createElement } from 'react';
import { render } from 'react-dom';

import { HotApp } from './hot-app';
import { router } from './router';

import { loadWebFonts } from './utils/web-font-loader';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('No root element');
}

const renderApp = (): void => {
  loadWebFonts().then((res) =>
    res.load({
      google: {
        families: ['Montserrat:100,400,700&display=swap'],
      },
    })
  );
  render(createElement(HotApp, { router }), rootElement);
};

router.start(renderApp);

// Hot reloading
if (module.hot) {
  module.hot.accept(renderApp);
}
