import React from 'react';

import { SingleProject } from 'app/features/single-project/single-project';
import { Header } from 'app/core/components/header';

export const ProjectPageView = () => (
  <>
    <Header mobileByDefault />
    <SingleProject />
  </>
);
