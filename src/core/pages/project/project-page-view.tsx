import React from 'react';

import { SingleProject } from 'features/single-project/single-project';
import Header from 'core/components/header';

export const ProjectPageView = () => (
  <>
    <Header mobileByDefault />
    <main>
      <SingleProject />
    </main>
  </>
);
