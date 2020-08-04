import { createElement } from 'react';
import { render } from 'react-dom';

import { App } from 'app';
import { router } from './router';

import { getFonts } from './fonts';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('No root element');
}

const renderApp = (): void => {
  getFonts().then(res =>
    res.load({
      google: {
        families: ['Montserrat:100,400,700&display=swap'],
      },
    })
  );
  render(createElement(App, { router }), rootElement);
};

router.start(renderApp);

if (module.hot) {
  module.hot.accept(renderApp);
}
