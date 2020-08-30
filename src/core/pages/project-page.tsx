import React from 'react';

import { SingleProject } from '~/features/single-project/single-project';
import Header from '~/core/components/header';

const ProjectPage = () => (
  <>
    <Header mobileByDefault />
    <main>
      <SingleProject />
    </main>
  </>
);

// eslint-disable-next-line import/no-default-export
export default ProjectPage;
