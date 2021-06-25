import * as React from 'react';
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useStore } from 'effector-react';
import * as env from '~/env';

import { $languageStore } from '~/store/language-store';

import { Props } from './types';
import { ROUTE_NAME_PORTFOLIO } from '~/router/routes';
import { PROJECT_PREVIEW_URL, PROJECT_THUMBNAIL_URL } from '~/constants/api';
import { PORTFOLIO_CATEGORIES_TABS_LABELS } from '~/constants/portfolio';
import { LazyImage } from '~/ui/lazy-image';
import { Layout } from '~/core/components';
import { ProjectForm } from '~/features/project/components';
import {
  AnimatedDescriptionStyled,
  AnimatedFigureStyled,
  AnimatedSectionStyled,
  Category,
  Description,
  StyledLink,
  StyledRealProjectLink,
  Title,
  DescriptionList,
  EditProjectLink,
  AnimatedDescriptionContentStyled,
} from './styled';
import { NoData } from '~/features/project/no-data';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
  exit: { y: '50%', opacity: 0, transition },
};

const descriptionVariants = {
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
  exit: { x: 100, opacity: 0, transition },
};

export const ProjectView: React.FC<Props> = ({
  data,
  portfolioSelectedCategory,
  isEditState,
  router,
  isAuthenticated,
}) => {
  const language = useStore($languageStore);

  if (!data) {
    return (
      <Layout showFooter={false} headerMobileByDefault>
        <AnimatedSectionStyled initial="exit" animate="enter" exit="exit">
          <NoData />
        </AnimatedSectionStyled>
      </Layout>
    );
  }

  const projectPreviewUrl =
    env.ENVIRONMENT === 'DEV'
      ? data.imageSrc
      : PROJECT_PREVIEW_URL(data.category, data.imageSrc);

  const projectThumbnailUrl =
    env.ENVIRONMENT === 'DEV'
      ? data.imageSrc
      : PROJECT_THUMBNAIL_URL(data.category, data.thumbnailSrc);

  return (
    <Layout showFooter={false} headerMobileByDefault>
      <AnimatedSectionStyled initial="exit" animate="enter" exit="exit">
        <AnimatePresence>
          <AnimatedFigureStyled variants={imageVariants}>
            <LazyImage
              alt={data.imageName}
              src={projectPreviewUrl}
              srcSet={projectThumbnailUrl}
              style={{ maxWidth: '70vw' }}
            />
          </AnimatedFigureStyled>
          <AnimatedDescriptionStyled variants={descriptionVariants}>
            {isEditState && (
              <AnimatedDescriptionContentStyled
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.6 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
              >
                <StyledLink
                  routeName="project"
                  routeParams={{ id: data.imageName }}
                  routeOptions={{ reload: true }}
                  router={router}
                >
                  ← &nbsp;
                  <Trans>To project</Trans>
                </StyledLink>
                <Title>
                  <Trans>Edit</Trans>
                </Title>
                <ProjectForm data={data} inEditState={isEditState} />
              </AnimatedDescriptionContentStyled>
            )}
            {!isEditState && (
              <AnimatedDescriptionContentStyled
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.6 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
              >
                <StyledLink
                  routeName={ROUTE_NAME_PORTFOLIO}
                  routeParams={{ category: portfolioSelectedCategory }}
                  routeOptions={{ reload: true }}
                  router={router}
                >
                  ← &nbsp;
                  <Trans>Back</Trans>
                </StyledLink>
                <Title>
                  {data && !isEditState && isAuthenticated && (
                    <EditProjectLink
                      routeName="project.edit"
                      routeParams={{
                        id: data.imageName,
                        category: data.category,
                      }}
                      routeOptions={{ reload: true }}
                      router={router}
                    >
                      <FontAwesomeIcon icon={faEdit} size="sm" />
                    </EditProjectLink>
                  )}
                  {data.title[language]}
                </Title>
                <Description>
                  <div>{data.description[language]}</div>
                  {data.descriptionList && (
                    <DescriptionList>
                      {data.descriptionList[language]
                        .split('.')
                        .filter((it) => it !== '')
                        .map((item: string) => (
                          <li key={item}>{item}</li>
                        ))}
                    </DescriptionList>
                  )}
                  <br />
                  {data.projectUrl && (
                    <>
                      <Trans>With a great pleasure I suggest you</Trans>
                      &nbsp;
                      <StyledRealProjectLink
                        href={data.projectUrl.href}
                        target="_blank"
                        rel="noopener"
                        title={i18n._('watch real project')}
                      >
                        <Trans>watch real project</Trans>
                      </StyledRealProjectLink>
                    </>
                  )}
                </Description>
                <Category>
                  {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[data.category])}
                </Category>
              </AnimatedDescriptionContentStyled>
            )}
          </AnimatedDescriptionStyled>
        </AnimatePresence>
      </AnimatedSectionStyled>
    </Layout>
  );
};
