import React from 'react';
import { I18n, Trans } from '@lingui/react';
import { AnimatePresence } from 'framer-motion';
import { useStore } from 'effector-react';

import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';

import { PortfolioCategories } from '~/constants/portfolio';
import { PAGE_TITLES } from '~/constants/page-titles';
import { ROUTE_NAME_PORTFOLIO, ROUTE_NAME_PROJECTS_ADD } from '~/router/routes';
import { Layout } from '~/core/components';
import { ProjectForm } from '~/features/project/components/project-form';
import { H1, H2 } from '~/ui/headings';
import {
  AnimatedMainStyled,
  AnimatedSectionStyled,
  StyledLink,
} from './styled';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const descriptionVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

export const ProjectNewView = () => {
  const selectedCategory = useStore($portfolioTabsStore);

  return (
    <Layout headerMobileByDefault>
      <AnimatedMainStyled initial="exit" animate="enter" exit="exit">
        <AnimatePresence>
          <AnimatedSectionStyled variants={descriptionVariants}>
            <I18n>
              {({ i18n }) => (
                <H1>{i18n._(PAGE_TITLES[ROUTE_NAME_PROJECTS_ADD])}</H1>
              )}
            </I18n>
            <StyledLink
              routeName={ROUTE_NAME_PORTFOLIO}
              routeParams={{ category: selectedCategory }}
            >
              ← &nbsp;
              <Trans>Back</Trans>
            </StyledLink>
            <H2>
              <Trans>Add project form</Trans>
            </H2>
            <ProjectForm
              initialValues={{ category: PortfolioCategories.FrontEnd }}
            />
          </AnimatedSectionStyled>
        </AnimatePresence>
      </AnimatedMainStyled>
    </Layout>
  );
};
