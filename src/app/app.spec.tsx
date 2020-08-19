import React from 'react';
import { mount } from 'enzyme';
import { $router, RouterStoreProps } from 'store/router-store';

import { App } from './app';

interface AppProps {
  router: RouterStoreProps;
}

const testProps = {
  router: $router,
};

const setUp = (props: AppProps) => mount(<App {...props} />);

describe('AppView', () => {
  it('should render AppView', () => {
    const container = setUp(testProps);
    expect(container).toMatchSnapshot();
  });
});
